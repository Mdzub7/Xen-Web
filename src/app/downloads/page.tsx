'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from '@/components/ui/motion';

const platforms = [
  {
    category: 'macOS',
    versions: [
      { name: 'Mac Universal', href: '#' },
      { name: 'Mac Arm64', href: '#' },
      { name: 'Mac x64', href: '#' },
    ]
  },
  {
    category: 'Windows',
    versions: [
      { name: 'Windows 10/11 (x64)', href: '#' },
      { name: 'Windows 10/11 (Arm64)', href: '#' },
    ]
  },
  {
    category: 'Linux',
    versions: [
      { name: '.AppImage (x64)', href: '#' },
      { name: '.AppImage (Arm64)', href: '#' },
    ]
  }
];

const versions = ['0.48', '0.47', '0.46', '0.45'];

export default function DownloadsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Download Cursor
          </h1>
          <SlideIn delay={0.2} className="mb-12">
            <p className="text-lg text-white/80">
              Choose your platform to download the latest version of Cursor
            </p>
          </SlideIn>

          {versions.map((version, versionIndex) => (
            <FadeIn key={version} className="mb-12" delay={0.2 * versionIndex}>
              {versionIndex === 0 && (
                <h2 className="text-2xl font-bold mb-6">Latest Version ({version})</h2>
              )}
              {versionIndex !== 0 && (
                <h2 className="text-2xl font-bold mb-6">{version}</h2>
              )}

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map((platform, platformIndex) => (
                  platform.versions.map((item, itemIndex) => {
                    const delay = 0.05 * (platformIndex * platform.versions.length + itemIndex);

                    return (
                      <StaggerItem
                        key={`${version}-${platform.category}-${item.name}`}
                        delay={delay}
                        className="bg-black border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all duration-200 hover:transform hover:scale-[1.02]"
                      >
                        <div className="p-5">
                          <h3 className="font-medium mb-1">{platform.category}</h3>
                          <p className="text-sm text-white/70 mb-4">{item.name}</p>
                          <Link href={item.href}>
                            <Button variant="outline" size="sm" className="w-full cursor-btn cursor-btn-secondary">
                              <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </span>
                              Download
                            </Button>
                          </Link>
                        </div>
                      </StaggerItem>
                    );
                  })
                ))}
              </StaggerContainer>
            </FadeIn>
          ))}
        </FadeIn>
      </div>
    </div>
  );
}
