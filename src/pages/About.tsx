import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Heart, Award, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Maria Rodriguez",
    role: "Founder & Lead Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Former immigration lawyer with 15 years helping Americans relocate to Spain.",
  },
  {
    name: "James Mitchell",
    role: "US Expat Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Made the move from Texas to Barcelona in 2018. Guides clients through the entire journey.",
  },
  {
    name: "Sofia García",
    role: "Visa Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: "Expert in Digital Nomad and Golden Visa applications with a 98% approval rate.",
  },
  {
    name: "David Chen",
    role: "Regional Expert",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Has lived in 5 Spanish regions. Helps clients find their perfect match.",
  },
];

const stats = [
  { value: "2,500+", label: "Successful Relocations" },
  { value: "98%", label: "Visa Approval Rate" },
  { value: "17", label: "Regions Covered" },
  { value: "8", label: "Years Experience" },
];

const values = [
  {
    icon: Heart,
    title: "Value First",
    description: "We provide real answers before asking for anything. Our tools give instant results with no email gates.",
  },
  {
    icon: Target,
    title: "Clarity Over Complexity",
    description: "Spain's bureaucracy is confusing. We cut through the noise and give you clear, actionable guidance.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We connect you with established expats, local resources, and a supportive community.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Our team includes immigration specialists, former lawyers, and successful expats who've made the journey.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Sandtons
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Making Your Spanish Dream a Reality
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a team of expats, immigration experts, and Spain enthusiasts who believe moving abroad shouldn't be overwhelming. Since 2016, we've helped over 2,500 Americans successfully relocate to Spain.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-muted/30 py-20 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    Sandtons was born from frustration. In 2016, our founder Maria spent six months navigating Spain's complex visa system. The information was scattered, outdated, and often contradictory.
                  </p>
                  <p>
                    After finally making the move and becoming a resident, she realized hundreds of Americans faced the same struggles every year. There had to be a better way.
                  </p>
                  <p>
                    Today, Sandtons combines technology with human expertise. Our interactive tools give you instant clarity, while our consultants provide personalized support when you need it.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&h=400&fit=crop"
                  alt="Spanish architecture in Barcelona"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Based in Madrid</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Believe</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our principles guide everything we do, from the tools we build to the advice we give.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="bg-card py-20 mb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experts and expats who understand your journey because they've lived it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h3 className="font-bold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary to-terracotta-dark rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Take our free tools for a spin or schedule a consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/visa-quiz">Take Visa Quiz</Link>
              </Button>
              <Button variant="navy" size="xl" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
