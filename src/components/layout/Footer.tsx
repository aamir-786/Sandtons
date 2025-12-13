import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  tools: [
    { label: "Visa Quiz", href: "/visa-quiz" },
    { label: "Readiness Check", href: "/readiness-check" },
    { label: "Cost Calculator", href: "/cost-calculator" },
    { label: "Region Finder", href: "/region-finder" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl">Sandtons</span>
            </Link>
            <p className="text-accent-foreground/70 text-sm leading-relaxed mb-6">
              Making your move to Spain simple, clear, and stress-free. Expert guidance every step of the way.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:hello@sandtons.com" className="flex items-center gap-2 text-accent-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                hello@sandtons.com
              </a>
              <a href="tel:+34912345678" className="flex items-center gap-2 text-accent-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +34 912 345 678
              </a>
              <div className="flex items-center gap-2 text-accent-foreground/70">
                <MapPin className="w-4 h-4" />
                Madrid, Spain
              </div>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Interactive Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
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
                    className="text-accent-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-accent-foreground/70 text-sm mb-4">
              Get the latest tips and guides for moving to Spain.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-lg bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {new Date().getFullYear()} Sandtons. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-accent-foreground/60 hover:text-primary transition-colors text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
