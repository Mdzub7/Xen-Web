'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const enterpriseFeatures = [
  {
    id: 'security',
    title: 'Enterprise-Grade Security',
    description: 'Xen.ai provides SOC 2 compliance, private cloud deployment options, and advanced data protection for your organization.',
    imageUrl: 'https://ext.same-assets.com/1338857137/449160623.svg',
  },
  {
    id: 'team-management',
    title: 'Centralized Team Management',
    description: 'Manage licenses, monitor usage, and control settings across your entire organization from a single dashboard.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3320898637.svg',
  },
  {
    id: 'sso',
    title: 'Single Sign-On',
    description: 'Seamless integration with your existing identity providers through SAML/OIDC SSO for enhanced security and user management.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3790901497.svg',
  },
  {
    id: 'custom-models',
    title: 'Custom AI Models',
    description: 'Deploy custom AI models trained on your proprietary codebase for enhanced productivity and context-aware assistance.',
    imageUrl: 'https://ext.same-assets.com/1338857137/3022089684.svg',
  },
];

export default function EnterprisePage() {
  return (
    <div className="pt-24 pb-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Xen.ai for Enterprise
          </h1>
          <SlideIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/80 mb-10">
              Empower your engineering teams with AI-powered coding tools designed for enterprise needs
            </p>
          </SlideIn>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact">
              <Button className="w-full sm:w-auto cursor-btn cursor-btn-primary">
                Contact Sales
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="w-full sm:w-auto cursor-btn cursor-btn-secondary">
                View Pricing
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Features Section */}
        <div className="space-y-24 mt-20">
          {enterpriseFeatures.map((feature, index) => (
            <FadeIn
              key={feature.id}
              delay={0.2 * index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              <SlideIn
                className="w-full md:w-1/2"
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.2 + 0.1 * index}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  {feature.description}
                </p>
              </SlideIn>
              <ScaleIn
                className="w-full md:w-1/2 relative"
                delay={0.3 + 0.1 * index}
              >
                <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl relative">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-purple-600/30 to-teal-600/30 opacity-50" />
                  
                  {/* Editor window chrome */}
                  <div className="w-full h-8 bg-zinc-900 flex items-center px-4 relative z-10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  
                  {/* Feature content */}
                  <div className="bg-zinc-950 w-full aspect-video relative">
                    <Image
                      src={feature.imageUrl}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </ScaleIn>
            </FadeIn>
          ))}
        </div>

        {/* Contact Form Section */}
        <div id="contact">
          <FadeIn className="max-w-3xl mx-auto mt-32">
            <div className="bg-zinc-900/50 rounded-lg border border-white/10 p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Contact Our Enterprise Team</h2>
              <p className="text-white/80 mb-8 text-center">Fill out the form below and our enterprise team will get back to you within 24 hours.</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Work Email</label>
                  <input type="email" className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Company</label>
                  <input type="text" className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Team Size</label>
                  <select className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                    <option>Select team size</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-fuchsia-500"></textarea>
                </div>
                
                <Button className="w-full cursor-btn cursor-btn-primary mt-2">
                  Submit Request
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}