import { NextResponse } from 'next/server';
import { Stripe } from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-03-31.basil',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { planName, price, billingCycle } = body;

    // Remove currency symbol and convert to cents
    const amount = parseInt(price.replace('$', '')) * 100;

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planName} Plan - ${billingCycle}`,
            },
            unit_amount: amount,
            recurring: {
              interval: billingCycle === 'monthly' ? 'month' : 'year',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error('Stripe API error:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}