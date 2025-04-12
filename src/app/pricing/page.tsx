'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, SlideIn, ScaleIn, GradientButton } from '@/components/ui/motion';
import { StripePaymentDialog } from '@/components/payment/StripePaymentDialog';

const pricingPlans = [
  {
    name: 'Hobby',
    price: 'Free',
    description: 'Includes',
    features: [
      'Pro two-week trial',
      '2000 completions',
      '50 slow premium requests',
    ],
    buttonText: 'OPEN EDITOR',
    secondaryButton: 'OTHERS',
    popular: false,
    gradient: false,
  },
  {
    name: 'Pro',
    price: '$20',
    unit: '/month',
    description: 'Everything in Hobby, plus',
    features: [
      'Unlimited completions',
      '500 fast premium requests per month',
      'Unlimited slow premium requests',
    ],
    buttonText: 'GET STARTED',
    popular: true,
    gradient: true,
  },
  {
    name: 'Business',
    price: '$40',
    unit: '/user/month',
    description: 'Everything in Pro, plus',
    features: [
      'Enforce privacy mode org-wide',
      'Centralized team billing',
      'Admin dashboard with usage stats',
      'SAML/OIDC SSO',
    ],
    buttonText: 'GET STARTED',
    popular: false,
    gradient: false,
  },
];

const getPrice = (plan: typeof pricingPlans[0], cycle: 'monthly' | 'yearly') => {
  if (plan.price === 'Free') return plan.price;
  const numericPrice = parseInt(plan.price.replace('$', ''));
  const yearlyPrice = cycle === 'yearly' ? Math.floor(numericPrice * 12 * 0.8) : numericPrice;
  return `$${cycle === 'yearly' ? yearlyPrice : numericPrice}`;
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
  } | null>(null);

  return (
    <div className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/30 via-purple-500/30 to-yellow-500/30 animate-gradient-slow" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-emerald-500/30 to-pink-500/30 animate-gradient-slow" style={{ animationDelay: '-4s' }} />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
          <SlideIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Choose the plan that works for you
            </p>
          </SlideIn>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-zinc-900 p-1 rounded-md mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm transition-all ${billingCycle === 'monthly' ? 'bg-zinc-800 text-white' : 'text-white/60'}`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md text-sm transition-all ${billingCycle === 'yearly' ? 'bg-zinc-800 text-white' : 'text-white/60'}`}
            >
              YEARLY (SAVE 20%)
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScaleIn key={plan.name} delay={0.2 + index * 0.1}>
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  y: -5, 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-xl border border-white/10 overflow-hidden relative ${plan.gradient ? 'gradient-card bg-zinc-900/80' : 'bg-zinc-900/50'}`}
              >
                {plan.gradient && (
                  <div className="absolute bottom-0 right-0 w-full h-2/3 bg-gradient-to-br from-blue-600/40 via-emerald-500/30 to-pink-500/30 opacity-80 blur-2xl"></div>
                )}
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold">{getPrice(plan, billingCycle)}</span>
                    {plan.unit && <span className="text-white/60 ml-2 text-lg">{plan.unit}</span>}
                  </div>
                  <div className="h-px bg-white/10 mb-6"></div>
                  <p className="text-white/80 mb-4">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <GradientButton
                    onClick={() => {
                      if (plan.name !== 'Hobby') {
                        setSelectedPlan({
                          name: plan.name,
                          price: getPrice(plan, billingCycle),
                        });
                      }
                    }}
                    className={`w-full py-2 px-4 rounded-md font-medium transition-all ${plan.name === 'Hobby' ? 'bg-white text-black hover:bg-gray-100' : 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white hover:from-blue-700 hover:to-emerald-600'}`}
                  >
                    {plan.buttonText}
                  </GradientButton>
                  {plan.secondaryButton && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 px-4 rounded-md font-medium bg-transparent border border-white/20 text-white mt-3 transition-all hover:bg-white/10"
                    >
                      {plan.secondaryButton}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* Stripe Payment Dialog */}
        {selectedPlan && (
          <StripePaymentDialog
            isOpen={!!selectedPlan}
            onClose={() => setSelectedPlan(null)}
            planName={selectedPlan.name}
            price={selectedPlan.price}
            billingCycle={billingCycle}
          />
        )}
      </div>
    </div>
  );
}