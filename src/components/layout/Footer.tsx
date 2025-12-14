import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  tools: [
    { label: "Mortgage Calculator", href: "/cost-calculator" },
    { label: "Visa Eligibility", href: "/visa-quiz" },
    { label: "Readiness Check", href: "/readiness-check" },
    { label: "Region Finder", href: "/region-finder" },
  ],
  resources: [
    { label: "Mortgage Guide", href: "#" },
    { label: "Legal Requirements", href: "#" },
    { label: "Cost Breakdown", href: "#" },
    { label: "Success Stories", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Sandtons</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Helping Americans secure the best mortgage rates for their Spanish dream homes. Expert guidance from application to keys.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@sandtons.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@sandtons.com
              </a>
              <a href="tel:+34912345678" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +34 912 345 678
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                Madrid, Spain
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Sandtons. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
