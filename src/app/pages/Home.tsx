import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { 
  Beaker, 
  Truck, 
  Search, 
  Award, 
  BarChart4, 
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Microscope,
  Atom
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import founderImg from "../../assets/founder.png";

export function Home() {
  const processes = [
    { 
      title: "Hydrogenation", 
      desc: "Specialized catalysts and precise material supply for high-pressure hydrogenation cycles. We ensure consistent purity for optimal results.",
      icon: <Beaker className="w-8 h-8" />,
      theme: "blue",
      category: "Process"
    },
    { 
      title: "High Vacuum Fractional Distillation", 
      desc: "Expertise in high vacuum fractional distillation for ultra-pure separations. We provide specialized materials for precise fractionation in pharmaceutical and chemical manufacturing.",
      icon: <Atom className="w-8 h-8" />,
      theme: "slate",
      category: "Synthesis"
    },
    { 
      title: "Methoxylation", 
      desc: "Deep understanding of methoxylation requirements for pharmaceutical and pigment industries, focusing on high conversion rates.",
      icon: <Microscope className="w-8 h-8" />,
      theme: "amber",
      category: "Refining"
    }
  ];

  const features = [
    {
      title: "Deep Process Expertise",
      desc: "We don't just sell chemicals; we understand your synthesis. Our background enables us to suggest the perfect fit for your production needs.",
      icon: <Search className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Zero-Compromise Quality",
      desc: "One contaminated batch can ruin your entire production. We prioritize rigorous quality checks, COA, and MSDS documentation.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Robust Logistics Network",
      desc: "Strong presence in Jhagadia, Surat, Dahej, and Saykha. Timely delivery PAN India via our expansive distribution network.",
      icon: <Truck className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Predictive Support",
      desc: "Our backend team proactively monitors your production needs to ensure we are always ready, avoiding last-minute delays.",
      icon: <BarChart4 className="w-8 h-8 text-blue-600" />
    }
  ];

  const partners = [
    "GACL", "GFL", "GNFC", "GHCL", "DEEPAK NITRITE", "DCM", "GRASSIM", "EPIGRAL", "TATA", "RELIANCE"
  ];

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Core Expertise</h2>
              <p className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Consultancy-Driven Supply for <span className="text-blue-600">Critical Applications.</span>
              </p>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Ramshree Corporation bridges the gap between raw material supply and chemical process optimization. 
                With over 2 decades of experience in top-tier pharma and chemical plants, we provide 
                insights that standard traders simply cannot match.
              </p>
            </div>
            <Link to="/expertise" className="group flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-sm">
              Our Process Expertise <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processes.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={() => window.location.href = '/expertise'}
                className="group p-12 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:bg-blue-600 hover:shadow-[0_20px_60px_rgba(37,99,235,0.3)] hover:border-blue-500 transition-all duration-500 relative cursor-pointer"
              >
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-16 h-16 rounded-[22px] flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white duration-500 ${
                    p.theme === "blue" ? "bg-[#E0F2FE] text-[#0284C7]" :
                    p.theme === "slate" ? "bg-[#F1F5F9] text-[#475569]" :
                    "bg-[#FFF7ED] text-[#B45309]"
                  }`}>
                    <div className="scale-110">
                      {p.icon}
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-colors group-hover:bg-white/10 group-hover:text-white ${
                    p.theme === "blue" ? "bg-[#F0F9FF] text-[#0284C7]" :
                    p.theme === "slate" ? "bg-[#F8FAFC] text-[#475569]" :
                    "bg-[#FFF7ED] text-[#B45309]"
                  }`}>
                    {p.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-white transition-colors leading-tight">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-white transition-colors">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition (The Founder's Vision) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={founderImg}
                alt="Founder Pramod Sharma"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-xl z-20 max-w-xs border border-slate-100 hidden sm:block">
              <div className="text-blue-600 mb-4"><Award className="w-10 h-10" /></div>
              <p className="text-slate-800 font-bold text-lg mb-2">Ex-Sunpharma & Bajaj Healthcare</p>
              <p className="text-sm text-slate-500">Over 2 decades of leadership in top-tier chemical corporations.</p>
            </div>
            {/* Background pattern */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Heritage</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Incepted by Experience. Driven by Consultation.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2014 by <strong>Mr. Pramod Sharma</strong>, we bring a vast background of working with industry giants like Sunpharma, Bajaj Healthcare Ltd, and the Surya Group. 
            </p>
            <div className="space-y-6">
              {[
                "Personalized consultancy for synthesis processes",
                "Improving quality & increasing yields",
                "Proactive Raw Material Planning and supply chain readiness",
                "Verified quality with COA and MSDS for every product"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 font-medium">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link 
                to="/about#founder" 
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('founder');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-600/20 active:scale-95 inline-block"
              >
                Meet Our Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Why Partner With Us</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Excellence in Every Molecule.</h2>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-slate-100 rounded-3xl hover:border-blue-200 hover:bg-blue-50/30 transition-all text-left"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logistics Banner */}
      <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1734092149490-e554e93fd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Chemical Logistics and Distribution"
            className="w-full h-full object-cover grayscale brightness-75"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Globe className="w-8 h-8" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PAN India Logistics Backbone</h2>
            <p className="text-xl text-blue-100/70 mb-12">
              With a strong dominance in <strong>Jhagadia, Surat (Sachin), Dahej, and Saykha</strong>, our network ensures your production never stops. Proactive supply chain management at its finest.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-blue-400 font-bold text-sm tracking-widest uppercase">
              <span>Jhagadia</span> <span className="text-blue-800">|</span>
              <span>Dahej</span> <span className="text-blue-800">|</span>
              <span>Surat</span> <span className="text-blue-800">|</span>
              <span>Saykha</span> <span className="text-blue-800">|</span>
              <span>Vast PAN India Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 font-semibold uppercase tracking-[0.3em] text-xs mb-12">Stockists & Suppliers of</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
            {partners.map((p, i) => (
              <span key={i} className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">Ready to Optimize Your Yields?</h2>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Connect with Mr. Sharma and our expert consultancy team to find the perfect chemical fits for your critical industrial processes.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
                  Request a Consultation
                </Link>
                <Link to="/products" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all active:scale-95">
                  View Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}