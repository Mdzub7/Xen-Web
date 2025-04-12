'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/motion';

const features = [
  {
    id: 'agent',
    title: 'Agent',
    description: 'Xen.ai agent mode can complete tasks end to end. It does this quickly, while keeping programmers in the loop.',
    imageUrl: 'https://ext.same-assets.com/1338857137/449160623.svg',
  },
  {
    id: 'tab',
    title: 'Tab',
    description: 'Xen.ai includes a powerful autocomplete that predicts your next edit. Once enabled, it is always on and will suggest edits to your code across multiple lines, taking into account your recent changes.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3320898637.svg',
  },
  {
    id: 'finds-context',
    title: 'Finds Context',
    description: 'Using custom retrieval models, Xen.ai can understand a codebase. This reduces the need to manually add context.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3790901497.svg',
  },
  {
    id: 'runs-commands',
    title: 'Runs Commands',
    description: 'Xen.ai can automatically write and run terminal commands. By default, youll be asked to confirm all commands.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3022089684.svg',
  },
  {
    id: 'loops-errors',
    title: 'Loops on Errors',
    description: 'Xen.ai can detect lint errors automatically and apply fixes, reducing the need for manual debugging.',
    imageUrl: 'http://assets.basehub.com/191e7e6d/869c6f1991ad10b8c9ca022835ff4a9a/agent-03-dark.svg',
    isGif: true,
  },
  {
    id: 'multi-line-edits',
    title: 'Multi-Line Edits',
    description: 'Xen.ai can suggest multiple edits at once, saving you time.',
    imageUrl: 'https://ext.same-assets.com/1338857137/1824558400.svg',
  },
  {
    id: 'smart-rewrites',
    title: 'Smart Rewrites',
    description: 'Type carelessly, and Xen.ai will fix your mistakes.',
    imageUrl: 'https://ext.same-assets.com/1338857137/1295125171.svg',
  },
  {
    id: 'cursor-prediction',
    title: 'Cursor Prediction',
    description: 'Xen.ai predicts your next cursor position so you can seamlessly navigate your code.',
    imageUrl: 'https://ext.same-assets.com/1338857137/333936142.svg',
  },
  {
    id: 'chat',
    title: 'Chat',
    description: 'Chat lets you talk with an AI that sees your codebase. The chat can always see your current file and cursor, so you can ask it things like: "Is there a bug here?".',
    imageUrl: 'https://ext.same-assets.com/1338857137/573568688.svg',
  },
  {
    id: 'codebase-answers',
    title: 'Codebase Answers',
    description: 'Use @Codebase or Enter to ask questions about your codebase. Xen.ai will search your codebase to find relevant code to your query.',
    imageUrl: 'https://ext.same-assets.com/1338857137/1282032480.svg',
  },
  {
    id: 'terminal-k',
    title: 'Terminal ⌘K',
    description: 'Use ⌘K in the terminal to write terminal commands in plain english. Xen.ai will convert them into the terminal command you need.',
    imageUrl: 'https://assets.basehub.com/191e7e6d/7a56f5d6b9f8fda653df7777fa50b433/terminal-dark.svg',
    isGif: true,
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative bg-black">
      {features.map((feature, index) => (
        <FeatureSection key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
}

function FeatureSection({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={ref} className="min-h-screen relative flex items-center justify-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-purple-500/20 to-yellow-500/20 animate-gradient-slow"
          style={{ animationDelay: `${index * -2}s` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-emerald-500/20 to-pink-500/20 animate-gradient-slow"
          style={{ animationDelay: `${index * -4}s` }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn className={`${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{feature.title}</h2>
            <p className="text-lg md:text-xl text-white/80">{feature.description}</p>
          </FadeIn>
          
          <motion.div 
            className={`${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'} relative`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
