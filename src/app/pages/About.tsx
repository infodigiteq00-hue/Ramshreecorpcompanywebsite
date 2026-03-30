import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Award, Briefcase, History, TrendingUp, Users } from "lucide-react";
import founderImg from "../../assets/founder.png";
import { useEffect } from "react";

export function About() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const stats = [
    { label: "Founded", value: "2014", icon: <History className="w-5 h-5" /> },
    { label: "Products", value: "100+", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Growth", value: "400%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Experts", value: "15+", icon: <Users className="w-5 h-5" /> },
  ];

  const milestones = [
    {
      year: "2014",
      title: "The Genesis",
      desc: "Founded by Mr. Pramod Sharma with a vision to provide specialized chemical consultancy based on over 2 decades of tier-1 corporate experience."
    },
    {
      year: "2016",
      title: "Portfolio Expansion",
      desc: "Reached a milestone of 30+ specialty chemical products serving the pharmaceutical and pigment sectors."
    },
    {
      year: "2019",
      title: "Logistic Excellence",
      desc: "Established a dedicated logistics network focusing on Gujarat's industrial hubs (Dahej, Surat, Jhagadia)."
    },
    {
      year: "2023",
      title: "Strategic Partnerships",
      desc: "Solidified distribution roles for industry leaders like Panoli Intermediates India Pvt Ltd, UPL, Kutch Chemical, Punjab Chemical."
    }
  ];

  return (
    <div className="pt-24 bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1749084820874-0edd6f369113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200')] bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Built on <span className="text-blue-500">Expertise.</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Discover the story behind Ramshree Corporation and our journey from a specialized consultancy to a nationwide chemical power-player.
          </p>
        </div>
      </section>

      {/* Founder's Story */}
      <section id="founder" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Meet Mr. Pramod Sharma</h3>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="mb-6">
                  Incepted in 2014, Ramshree Corporation was born from the vision of <strong>Mr. Pramod Sharma</strong>. 
                  With a vast background of working with top-tier chemical companies like 
                  <span className="text-slate-900 font-semibold"> Sunpharma, Bajaj Healthcare Ltd., K.A. Malle, and the Surya Group</span>, 
                  Mr. Sharma recognized a critical gap in the market.
                </p>
                <p className="mb-6">
                  Most suppliers were simply trading materials. Very few understood the <strong>synthesis process</strong> or the 
                  critical requirements of a chemist at the production line. 
                </p>
                <p className="mb-8 italic border-l-4 border-blue-500 pl-6 py-2 bg-blue-50/30 rounded-r-xl">
                  "Our experience has positioned us as the most suitable personalized consultant. We don't just supply; 
                  we optimize your chemical yield and increase your profit margins."
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((s, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-slate-50">
                    <div className="flex justify-center text-blue-600 mb-2">{s.icon}</div>
                    <div className="text-xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={founderImg}
                  alt="Professional Executive"
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-500">Over 2 decades of commitment to chemical excellence.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start relative group"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-3xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors">{m.year}</span>
                </div>
                <div className="flex-grow bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group-hover:shadow-lg transition-all group-hover:border-blue-100">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{m.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="p-10 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-900/20">
            <div className="mb-6"><Award className="w-12 h-12" /></div>
            <h3 className="text-2xl font-bold mb-4">The Consultant's Edge</h3>
            <p className="text-blue-50/80 leading-relaxed">
              We don't just supply products; we provide data-driven recommendations that maintain standard yield while increasing profit margins for your company.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-900/20">
            <div className="mb-6"><ShieldCheck className="w-12 h-12 text-blue-500" /></div>
            <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
            <p className="text-slate-400 leading-relaxed">
              Every delivery is backed by proper packing, labels, COA (Certificate of Analysis), and MSDS documentation. We understand the cost of a single contaminated batch.
            </p>
          </div>
          <div className="p-10 rounded-3xl border border-slate-200 text-slate-900 bg-white">
            <div className="mb-6"><Users className="w-12 h-12 text-blue-600" /></div>
            <h3 className="text-2xl font-bold mb-4">Customer Proactivity</h3>
            <p className="text-slate-500 leading-relaxed">
              Our proactive planning enables us to understand your production schedule, keeping us ready to meet your needs without delays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}