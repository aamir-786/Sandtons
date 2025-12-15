import { motion } from "framer-motion";

const mortgageTypes = [
  {
    name: "Fixed Rate",
    rate: "3.5-4.5%",
    ltv: "Up to 70%",
    term: "15-30 years",
    bestFor: "Stability seekers",
  },
  {
    name: "Variable Rate",
    rate: "Euribor + 1%",
    ltv: "Up to 70%",
    term: "15-30 years",
    bestFor: "Risk tolerant",
  },
  {
    name: "Mixed Rate",
    rate: "3% then variable",
    ltv: "Up to 70%",
    term: "15-30 years",
    bestFor: "Balanced approach",
  },
  {
    name: "Interest Only",
    rate: "4-5%",
    ltv: "Up to 60%",
    term: "5-10 years",
    bestFor: "Investors",
  },
];

export function ComparisonTable() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Spain Mortgage Types & Costs
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full bg-card rounded-xl border border-border overflow-hidden">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-3 text-left font-semibold text-sm">Mortgage Type</th>
                <th className="px-5 py-3 text-left font-semibold text-sm">Interest Rate</th>
                <th className="px-5 py-3 text-left font-semibold text-sm">Max LTV</th>
                <th className="px-5 py-3 text-left font-semibold text-sm">Term</th>
                <th className="px-5 py-3 text-left font-semibold text-sm">Best For</th>
              </tr>
            </thead>
            <tbody>
              {mortgageTypes.map((mortgage, index) => (
                <tr
                  key={mortgage.name}
                  className={index % 2 === 0 ? "bg-card" : "bg-muted/30"}
                >
                  <td className="px-5 py-3 font-semibold text-card-foreground text-sm">{mortgage.name}</td>
                  <td className="px-5 py-3 text-muted-foreground text-sm">{mortgage.rate}</td>
                  <td className="px-5 py-3 text-muted-foreground text-sm">{mortgage.ltv}</td>
                  <td className="px-5 py-3 text-muted-foreground text-sm">{mortgage.term}</td>
                  <td className="px-5 py-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {mortgage.bestFor}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-center"
        >
          <p className="text-muted-foreground text-xs">
            * Rates and terms are indicative and vary by lender. Non-resident buyers typically qualify for 60-70% LTV.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
