'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const jobOpenings = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Join our core AI team to develop and improve the AI models that power Xen.ai. Youll work on cutting-edge language models and help shape the future of AI-assisted coding.',
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Help build the next generation of our editor interface. Youll work with React, TypeScript, and other modern web technologies to create a seamless user experience.',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Drive the product roadmap for Xen.ai. Youll work closely with engineering, design, and customers to define and prioritize features that delight developers.',
  },
  {
    id: 'developer-advocate',
    title: 'Developer Advocate',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Be the voice of Xen.ai in the developer community. Youll create content, speak at events, and help developers get the most out of our platform.',
  },
  {
    id: 'customer-success-engineer',
    title: 'Customer Success Engineer',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help our enterprise customers succeed with Xen.ai. Youll provide technical support, conduct training sessions, and ensure customers are getting maximum value.',
  },
];

const companyValues = [
  {
    title: 'Innovation',
    description: 'We push the boundaries of whats possible with AI and software development.',
    icon: '🚀',
  },
  {
    title: 'User-Centric',
    description: 'We obsess over user experience and build products that developers love to use.',
    icon: '💡',
  },
  {
    title: 'Transparency',
    description: 'We believe in open communication and sharing our journey with our community.',
    icon: '🔍',
  },
  {
    title: 'Diversity',
    description: 'We value diverse perspectives and create an inclusive environment for all.',
    icon: '🌈',
  },
];

const benefits = [
  'Competitive salary and equity',
  'Flexible remote work policy',
  'Comprehensive health, dental, and vision insurance',
  'Unlimited PTO',
  'Home office stipend',
  'Learning and development budget',
  'Regular team retreats',
  'Parental leave',
  'Mental health resources',
  '401(k) matching',
];

export default function CareersPage() {
  return (
    <div className="pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Xen.ai Team
          </h1>
          <SlideIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Help us build the future of AI-assisted coding and empower developers worldwide
            </p>
          </SlideIn>
          <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden border border-white/10">
            <Image
              src="https://ext.same-assets.com/1338857137/1295125171.svg"
              alt="Xen.ai Team"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* About Us Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Xen.ai</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  At Xen.ai, we're on a mission to revolutionize how developers write code. Our AI-powered coding assistant helps developers be more productive, creative, and focused on solving the problems that matter.
                </p>
                <p>
                  Founded in 2021, we've grown rapidly to serve hundreds of thousands of developers worldwide, from individual contributors to teams at Fortune 500 companies.
                </p>
                <p>
                  We're backed by top-tier investors and are growing our team to meet the increasing demand for AI-assisted development tools.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {companyValues.map((value, index) => (
                <div key={value.title} className="bg-zinc-900/50 border border-white/10 rounded-lg p-6">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-white/70 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <FadeIn className="mb-20">
          <div className="bg-gradient-to-br from-fuchsia-900/30 via-purple-900/30 to-zinc-900 rounded-lg border border-white/10 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:bg-zinc-900/80 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-300">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                      {job.location}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                      {job.type}
                    </span>
                  </div>
                </div>
                <p className="text-white/80 mb-6">{job.description}</p>
                <Link href={`/careers/${job.id}`}>
                  <Button variant="outline" className="cursor-btn cursor-btn-secondary">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Chat with AI GIF Section */}
        <FadeIn className="mb-20">
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Work with Cutting-Edge AI</h2>
                <p className="text-white/80 mb-6">
                  At Xen.ai, you'll be at the forefront of AI innovation, working with state-of-the-art language models and helping shape the future of software development.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/90">Collaborate with world-class AI researchers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/90">Build products used by developers worldwide</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-white/90">Solve challenging technical problems</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video md:aspect-auto">
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/50">
                  <Image
                    src="/code-editor.gif"
                    alt="Chat with AI"
                    width={500}
                    height={300}
                    className="object-cover rounded-r-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about AI and software development. Even if you don't see a position that matches your skills, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#open-positions">
              <Button className="cursor-btn cursor-btn-primary">
                View Open Positions
              </Button>
            </Link>
            <Link href="mailto:careers@xen.ai">
              <Button variant="outline" className="cursor-btn cursor-btn-secondary">
                Contact Recruiting
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}