'use client';

import Image from 'next/image';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const testimonials = [
  {
    id: "1",
    quote: "Xen.ai is at least a 2x improvement over Copilot. It's amazing having an AI pair programmer, and is an incredible accelerator for me and my team.",
    author: "Ben Bernard",
    company: "Instacart",
  },
  {
    id: "2",
    quote: "The Xen.ai tab completion while coding is occasionally so magic it defies reality - about ~25% of the time it is anticipating exactly what I want to do. It is enough to make you believe that eventually you'll be able to code at the speed of thought.",
    author: "Kevin Whinnery",
    company: "OpenAI",
  },
  {
    id: "3",
    quote: "Xen.ai is hands down my biggest workflow improvement in years",
    author: "Sawyer Hood",
    company: "Figma",
  },
  {
    id: "4",
    quote: "I love writing code and Xen.ai is a necessity. Xen.ai is steps ahead of my brain, proposing multi-line edits so I type tab more than anything else.",
    author: "Andrew Milich",
    company: "Notion",
  },
  {
    id: "5",
    quote: "Xen.ai is so good, and literally gets better/more feature-rich every couple of weeks.",
    author: "Morgan McGuire",
    company: "Weights & Biases",
  },
  {
    id: "6",
    quote: "Xen.ai is awesome! Someone finally put GPT into a code editor in a seamless way. It's so elegant and easy. No more copying and pasting. I'm an hour in and already hooked.",
    author: "Andrew McCalip",
    company: "Varda",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full gradient-hero" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by world-class devs
          </h2>
          <SlideIn delay={0.2}>
            <p className="text-lg text-white/80">
              Engineers all around the world reach for Xen.ai by choice.
            </p>
          </SlideIn>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem
              key={testimonial.id}
              delay={0.05 * index}
              className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <blockquote className="mb-4">
                <p className="text-white/80 italic">&quot;{testimonial.quote}&quot;</p>
              </blockquote>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-medium text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-white/60">{testimonial.company}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
