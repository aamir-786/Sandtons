import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const visaTypes = [
  {
    name: "Digital Nomad",
    duration: "Up to 5 years",
    workAllowed: true,
    minIncome: "€2,500/month",
    processingTime: "2-4 months",
    ideal: "Remote workers",
  },
  {
    name: "Non-Lucrative",
    duration: "1 year (renewable)",
    workAllowed: false,
    minIncome: "€2,400/month passive",
    processingTime: "1-3 months",
    ideal: "Retirees",
  },
  {
    name: "Self-Employed",
    duration: "1 year (renewable)",
    workAllowed: true,
    minIncome: "Business plan required",
    processingTime: "3-6 months",
    ideal: "Entrepreneurs",
  },
  {
    name: "Golden Visa",
    duration: "2 years (renewable)",
    workAllowed: true,
    minIncome: "€500k+ investment",
    processingTime: "2-3 months",
    ideal: "Investors",
  },
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Visa Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Spain Visa Types & Requirements
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full bg-card rounded-2xl border border-border overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-4 text-left font-semibold">Visa Type</th>
                <th className="px-6 py-4 text-left font-semibold">Duration</th>
                <th className="px-6 py-4 text-center font-semibold">Work Allowed</th>
                <th className="px-6 py-4 text-left font-semibold">Min. Income</th>
                <th className="px-6 py-4 text-left font-semibold">Processing</th>
                <th className="px-6 py-4 text-left font-semibold">Ideal For</th>
              </tr>
            </thead>
            <tbody>
              {visaTypes.map((visa, index) => (
                <tr
                  key={visa.name}
                  className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}
                >
                  <td className="px-6 py-4 font-semibold text-card-foreground">{visa.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{visa.duration}</td>
                  <td className="px-6 py-4 text-center">
                    {visa.workAllowed ? (
                      <Check className="w-5 h-5 text-olive mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{visa.minIncome}</td>
                  <td className="px-6 py-4 text-muted-foreground">{visa.processingTime}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {visa.ideal}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
