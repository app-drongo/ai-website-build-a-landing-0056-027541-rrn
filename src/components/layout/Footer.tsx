'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Leaf,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleCTA = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleNewsletterSignup = () => {
    console.log('Newsletter signup initiated');
    // Newsletter signup logic
  };

  const footerSections = [
    {
      title: 'Landscaping Services',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Garden Design', href: '/garden-design' },
        { name: 'Lawn Care', href: '/lawn-care' },
        { name: 'Tree Services', href: '/tree-services' },
        { name: 'Irrigation Systems', href: '/irrigation' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Service Areas', href: '/service-areas' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Plant Care Guide', href: '/plant-care' },
        { name: 'Seasonal Tips', href: '/seasonal-tips' },
        { name: 'Maintenance Plans', href: '/maintenance' },
        { name: 'Design Gallery', href: '/gallery' },
        { name: 'Project Estimates', href: '/estimates' },
        { name: 'Consultation', href: '/consultation' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Service Agreement', href: '/service-agreement' },
        { name: 'Warranty Info', href: '/warranty' },
        { name: 'Emergency Service', href: '/emergency' },
        { name: 'Insurance Claims', href: '/insurance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/greenthumblandscapes' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/greenthumblandscapes' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/greenthumblandscapes' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/greenthumblandscapes' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Leaf className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">GreenThumb Landscapes</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transforming outdoor spaces into beautiful, sustainable landscapes for over 15
                years. From garden design to complete yard makeovers, we bring your vision to life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@greenthumblandscapes.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) GARDEN-1</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Garden Way, Green Valley</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Seasonal Garden Tips</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get monthly landscaping tips and seasonal care guides. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 GreenThumb Landscapes. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Growing with <Heart className="size-3 text-primary fill-current" /> since 2009
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Button
              variant="link"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground p-0 h-auto"
              onClick={handleCTA}
            >
              View Portfolio
            </Button>
            <Link
              href="/licensing"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Licensing & Insurance
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/service-guarantee"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Service Guarantee
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
