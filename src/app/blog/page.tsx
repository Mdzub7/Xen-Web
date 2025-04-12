'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const blogPosts = [
  {
    id: 'ai-coding-future',
    title: 'The Future of AI-Assisted Coding',
    excerpt: 'Explore how AI is transforming software development and what the future holds for developers working with AI assistants.',
    date: 'May 15, 2023',
    author: 'Sarah Chen',
    authorRole: 'AI Research Lead',
    imageUrl: 'https://ext.same-assets.com/1338857137/449160623.svg',
    category: 'AI Research',
  },
  {
    id: 'productivity-tips',
    title: '10 Productivity Tips When Using Xen.ai',
    excerpt: 'Learn how to maximize your productivity with these expert tips for using Xen.ai in your daily development workflow.',
    date: 'June 3, 2023',
    author: 'Michael Rodriguez',
    authorRole: 'Senior Developer Advocate',
    imageUrl: 'https://ext.same-assets.com/1338857137/3320898637.svg',
    category: 'Productivity',
  },
  {
    id: 'enterprise-adoption',
    title: 'Enterprise Adoption of AI Coding Tools',
    excerpt: 'Case studies and insights on how Fortune 500 companies are implementing AI coding assistants to boost developer productivity.',
    date: 'July 12, 2023',
    author: 'Alex Thompson',
    authorRole: 'Enterprise Solutions Director',
    imageUrl: 'https://ext.same-assets.com/1338857137/3790901497.svg',
    category: 'Enterprise',
  },
  {
    id: 'ai-ethics',
    title: 'Ethics in AI Code Generation',
    excerpt: 'A deep dive into the ethical considerations of using AI for code generation and how Xen.ai addresses these concerns.',
    date: 'August 24, 2023',
    author: 'Dr. Priya Sharma',
    authorRole: 'Ethics Researcher',
    imageUrl: 'https://ext.same-assets.com/1338857137/3022089684.svg',
    category: 'Ethics',
  },
  {
    id: 'chat-with-ai',
    title: 'How to Effectively Chat with Your AI Assistant',
    excerpt: 'Tips and best practices for crafting prompts that get you the best results when chatting with Xen.ai.',
    date: 'September 5, 2023',
    author: 'James Wilson',
    authorRole: 'Product Manager',
    imageUrl: 'https://ext.same-assets.com/1338857137/3139304298.svg',
    category: 'User Guides',
  },
  {
    id: 'xen-ai-update',
    title: 'Xen.ai 2.0: Whats New and Improved',
    excerpt: 'A comprehensive overview of all the new features and improvements in the latest version of Xen.ai.',
    date: 'October 18, 2023',
    author: 'Emma Davis',
    authorRole: 'CTO',
    imageUrl: 'https://ext.same-assets.com/1338857137/1824558400.svg',
    category: 'Product Updates',
  },
];

const featuredPost = {
  id: 'ai-pair-programming',
  title: 'AI Pair Programming: A New Era of Collaboration',
  excerpt: 'Discover how AI pair programming is revolutionizing the way developers work and collaborate on projects. This in-depth article explores the benefits, challenges, and future possibilities of working alongside an AI coding assistant.',
  date: 'November 2, 2023',
  author: 'David Kim',
  authorRole: 'Lead Developer Experience',
  imageUrl: 'https://ext.same-assets.com/1338857137/1295125171.svg',
  category: 'Development',
  readTime: '8 min read',
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xen.ai Blog
          </h1>
          <SlideIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Insights, tutorials, and updates from the Xen.ai team
            </p>
          </SlideIn>
        </FadeIn>

        {/* Featured Post */}
        <FadeIn className="mb-16">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-white/60">{featuredPost.date}</span>
                  <span className="text-xs text-white/60">•</span>
                  <span className="text-xs text-white/60">{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-white/80 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{featuredPost.author}</p>
                    <p className="text-xs text-white/60">{featuredPost.authorRole}</p>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="text-fuchsia-400 font-medium hover:text-fuchsia-300 transition-colors">
                  Read full article →
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Blog Posts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <StaggerItem key={post.id} delay={0.1 * index} className="h-full">
              <Link href={`/blog/${post.id}`} className="block h-full">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-video">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/60">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-white/80 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-white/60">{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Newsletter Signup */}
        <FadeIn className="max-w-3xl mx-auto mt-20">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-zinc-900 p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-3">Subscribe to our newsletter</h3>
              <p className="text-white/80">Get the latest Xen.ai news, tips, and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
              <button className="px-6 py-2 bg-fuchsia-600 text-white font-medium rounded-md hover:bg-fuchsia-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}