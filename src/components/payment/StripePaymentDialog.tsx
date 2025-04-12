'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your test publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface StripePaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  price: string;
  billingCycle: 'monthly' | 'yearly';
}

export function StripePaymentDialog({
  isOpen,
  onClose,
  planName,
  price,
  billingCycle,
}: StripePaymentDialogProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Call your backend to create a Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
          price,
          billingCycle,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Subscribe to {planName}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <p className="text-center text-white/80">
            You will be redirected to Stripe to complete your purchase
          </p>
          <div className="flex items-baseline justify-center space-x-1">
            <span className="text-3xl font-bold">{price}</span>
            <span className="text-white/60">/{billingCycle}</span>
          </div>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full py-2 px-4 rounded-md font-medium bg-fuchsia-600 text-white transition-all hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}