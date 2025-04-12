import Link from 'next/link';

const footerLinks = [
  {
    id: 'col-1',
    title: '',
    links: [
      { id: 'email', name: 'hi@xen.ai', href: 'mailto:hi@xen.ai' },
      { id: 'soc2', name: 'SOC 2 Certified', href: '#' },
      { id: 'anysphere', name: 'Made by Anysphere', href: 'https://anysphere.inc' },
    ],
  },
  {
    id: 'col-2',
    title: '',
    links: [
      { id: 'pricing', name: 'Pricing', href: '/pricing' },
      { id: 'downloads', name: 'Open Editor', href: '/downloads' },
      { id: 'docs', name: 'Docs', href: '/docs' },
      { id: 'forum', name: 'Forum', href: 'https://forum.xen.ai' },
    ],
  },
  {
    id: 'col-3',
    title: '',
    links: [
      { id: 'careers', name: 'Careers', href: 'https://anysphere.inc' },
      { id: 'company', name: 'Company', href: 'https://anysphere.inc' },
      { id: 'security', name: 'Security', href: '/security' },
      { id: 'privacy', name: 'Privacy', href: '/privacy' },
    ],
  },
  {
    id: 'col-4',
    title: '',
    links: [
      { id: 'terms', name: 'Terms', href: '/terms-of-service' },
      { id: 'changelog', name: 'Changelog', href: '/changelog' },
      { id: 'github', name: 'GitHub', href: 'https://github.com/getxen/xen.ai' },
      { id: 'twitter', name: 'Twitter', href: 'https://x.com/xen_ai' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((column) => (
            <div key={column.id} className="flex flex-col space-y-6">
              {column.title && (
                <h3 className="text-base font-medium text-white/60">{column.title}</h3>
              )}
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-base text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-16">
          <div className="flex items-center space-x-4">
            <select
              className="bg-black/60 border border-white/10 rounded-md text-sm px-2 py-1 text-white/80"
              defaultValue="en"
            >
              <option value="en">English</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-black/60 border border-white/10">
              <span className="sr-only">Light mode</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white/60">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            </button>
            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-900 border border-white/10">
              <span className="sr-only">Dark mode</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white/80">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
