import { motion } from "framer-motion";
import { Play, Headphones, BookOpen } from "lucide-react";

const mediaItems = [
  {
    type: "video",
    icon: Play,
    title: "How to Apply for a Spanish Mortgage",
    description: "Step-by-step video guide",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    duration: "15 min",
  },
  {
    type: "podcast",
    icon: Headphones,
    title: "Expat Stories: Buying Property in Spain",
    description: "Real experiences from Americans",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    duration: "32 min",
  },
  {
    type: "article",
    icon: BookOpen,
    title: "2024 Spanish Mortgage Guide",
    description: "Complete guide for US buyers",
    image: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=400&h=250&fit=crop",
    duration: "10 min read",
  },
  {
    type: "video",
    icon: Play,
    title: "Understanding Spanish Property Taxes",
    description: "Everything you need to know",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop",
    duration: "12 min",
  },
];

export function MediaSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-wider mb-2 block">
            Media
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Watch • Listen • Read
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {mediaItems.map((item, index) => (
            <motion.a
              key={item.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all card-hover"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 rounded bg-card/90 text-xs font-medium text-foreground">
                    {item.duration}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
