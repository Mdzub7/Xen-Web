'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const categories = [
  {
    id: 'general',
    name: 'General Discussion',
    description: 'General discussions about Xen.ai and AI-assisted coding',
    topics: 156,
    posts: 1243,
    icon: '💬',
  },
  {
    id: 'help',
    name: 'Help & Support',
    description: 'Get help with using Xen.ai and troubleshooting issues',
    topics: 324,
    posts: 2156,
    icon: '🔧',
  },
  {
    id: 'feature-requests',
    name: 'Feature Requests',
    description: 'Suggest and discuss new features for Xen.ai',
    topics: 98,
    posts: 876,
    icon: '✨',
  },
  {
    id: 'showcase',
    name: 'Showcase',
    description: 'Share what you\'ve built with Xen.ai',
    topics: 45,
    posts: 312,
    icon: '🚀',
  },
  {
    id: 'integrations',
    name: 'Integrations',
    description: 'Discuss integrating Xen.ai with other tools and services',
    topics: 67,
    posts: 489,
    icon: '🔌',
  },
  {
    id: 'tips-tricks',
    name: 'Tips & Tricks',
    description: 'Share and discover tips for getting the most out of Xen.ai',
    topics: 112,
    posts: 934,
    icon: '💡',
  },
];

const popularTopics = [
  {
    id: 'topic-1',
    title: 'How to use Xen.ai for complex refactoring tasks',
    author: 'devmaster',
    replies: 34,
    views: 1256,
    lastActivity: '2 hours ago',
    category: 'Tips & Tricks',
  },
  {
    id: 'topic-2',
    title: 'Feature request: Improved context awareness for large codebases',
    author: 'codewhisperer',
    replies: 28,
    views: 987,
    lastActivity: '5 hours ago',
    category: 'Feature Requests',
  },
  {
    id: 'topic-3',
    title: 'Xen.ai vs other AI coding assistants - a comprehensive comparison',
    author: 'techanalyst',
    replies: 56,
    views: 2345,
    lastActivity: '1 day ago',
    category: 'General Discussion',
  },
  {
    id: 'topic-4',
    title: 'Built a full-stack app in record time with Xen.ai',
    author: 'webwizard',
    replies: 19,
    views: 876,
    lastActivity: '2 days ago',
    category: 'Showcase',
  },
  {
    id: 'topic-5',
    title: 'Troubleshooting: Xen.ai not recognizing project dependencies',
    author: 'bugbuster',
    replies: 12,
    views: 543,
    lastActivity: '3 days ago',
    category: 'Help & Support',
  },
];

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xen.ai Community Forum
          </h1>
          <SlideIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Join the conversation with other Xen.ai users and the team
            </p>
          </SlideIn>

          {/* Search and Create Topic */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search the forum..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-zinc-900 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
              <svg
                className="absolute left-3 top-2.5 w-5 h-5 text-white/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <Button className="cursor-btn cursor-btn-primary">
              Create New Topic
            </Button>
          </div>
        </FadeIn>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/forum/category/${category.id}`}
                className="block"
              >
                <div className="rounded-lg border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-300 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 flex items-center justify-center text-2xl">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                      <p className="text-white/70 text-sm mb-3">{category.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-white/60">
                        <span>{category.topics} topics</span>
                        <span>{category.posts} posts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Topics</h2>
            <Link
              href="/forum/topics"
              className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors text-sm font-medium"
            >
              View All Topics
            </Link>
          </div>

          <div className="rounded-lg border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-900/80">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Topic</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Replies</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Views</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-white/60 uppercase tracking-wider">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-zinc-900/30">
                  {popularTopics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-zinc-900/50 transition-colors">
                      <td className="px-6 py-4">
                        <Link href={`/forum/topic/${topic.id}`} className="block">
                          <div>
                            <h3 className="font-medium text-white hover:text-fuchsia-400 transition-colors">{topic.title}</h3>
                            <p className="text-xs text-white/60 mt-1">by {topic.author}</p>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                          {topic.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/80">{topic.replies}</td>
                      <td className="px-6 py-4 text-white/80">{topic.views}</td>
                      <td className="px-6 py-4 text-white/60 text-sm">{topic.lastActivity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <FadeIn>
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-zinc-900 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">15,432</h3>
                <p className="text-white/70">Community Members</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">8,721</h3>
                <p className="text-white/70">Total Topics</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">42,156</h3>
                <p className="text-white/70">Total Posts</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Join the Community */}
        <FadeIn className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the Xen.ai Community</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Connect with other developers, share your experiences, and get help from the Xen.ai team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="cursor-btn cursor-btn-primary">
              Sign Up
            </Button>
            <Button variant="outline" className="cursor-btn cursor-btn-secondary">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}