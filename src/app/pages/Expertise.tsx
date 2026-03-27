import { motion } from "motion/react";
import { 
  Beaker, 
  Atom, 
  Microscope, 
  BarChart4, 
  FlaskConical, 
  Factory, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Search, 
  TrendingUp, 
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import hydrogenationImg from "figma:asset/d36cd533fe3662b265d023b94c463a7064c76b46.png";

export function Expertise() {
  const expertiseAreas = [
    {
      title: "Hydrogenation",
      subtitle: "High-Pressure Synthesis",
      desc: "Our deep technical background allows us to supply high-purity catalysts and raw materials optimized for high-pressure hydrogenation. We understand the sensitivity of catalyst activity and provide materials that ensure maximum cycle efficiency.",
      icon: <Beaker className="w-10 h-10" />,
      features: ["Catalyst Optimization", "Quality Assurance", "Application & Operation of Catalyst"],
      image: hydrogenationImg,
      color: "blue"
    },
    {
      title: "High Vacuum Fractional Distillation",
      subtitle: "Ultra-Pure Separations",
      desc: "High vacuum fractional distillation demands precision engineering and ultra-pure materials. We supply specialized chemicals that ensure optimal separation efficiency and product purity in pharmaceutical-grade distillations.",
      icon: <Atom className="w-10 h-10" />,
      features: ["Precision Fractionation", "High Purity Output", "Thermal Efficiency"],
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "slate"
    },
    {
      title: "Methoxylation",
      subtitle: "Yield-Focused Refining",
      desc: "Serving the pharmaceutical and pigment sectors, we provide high-grade methoxylating agents that guarantee high conversion rates. Our materials are tested for moisture content and pH levels to suit your specific synthesis pathway.",
      icon: <Microscope className="w-10 h-10" />,
      features: ["High Conversion Rates", "Pharma-Grade Purity", "Batch Consistency"],
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      color: "amber"
    }
  ];

  const consultancyPoints = [
    {
      title: "Yield Analysis",
      desc: "We don't just supply; we audit. Our team helps you analyze if the raw materials are the limiting factor in your yield performance.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Process Compatibility",
      desc: "We supply materials as per your product's approved make, matching the right chemicals for your specific process.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Predictive Supply",
      desc: "Using your production schedules to ensure materials arrive on time delivery, every single time.",
      icon: <BarChart4 className="w-6 h-6" />
    },
    {
      title: "Quality Benchmarking",
      desc: "We ensure every product delivered comes with proper COA & MSDS as per your required specifications.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1576669802218-d535933f897c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" 
            alt="Advanced Chemical Research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-white" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Where Science Meets <span className="text-blue-500">Strategy.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Ramshree Corporation isn't just a supplier—we are your chemical process partners. 
              Our expertise spans over 2 decades of leadership in top-tier pharmaceutical and specialty 
              chemical manufacturing.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#core-processes" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                Explore Processes
              </a>
              <Link to="/contact" className="px-8 py-4 bg-white/5 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold hover:bg-white/10 transition-all">
                Request a Yield Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                The Ramshree Advantage
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.1]">Beyond Trading: <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Strategic Consultation.</span></h3>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl">
                Most chemical suppliers simply move material. At Ramshree, we believe the material 
                is only as good as the process it supports. Founded by industry veteran <strong>Mr. Pramod Sharma</strong>, 
                our team understands the molecular level challenges of modern industrial synthesis.
              </p>
              
              <div className="space-y-12 relative mt-16">
                {/* Vertical connecting line */}
                <div className="absolute left-[27px] top-10 bottom-10 w-[2px] bg-slate-100 hidden md:block">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="w-full bg-gradient-to-b from-blue-600 via-blue-400 to-transparent origin-top"
                  />
                </div>

                {consultancyPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                    className="group flex flex-col md:flex-row gap-8 items-start relative pl-12 md:pl-0"
                  >
                    <div className="relative z-10 flex-shrink-0">
                       <div className="w-14 h-14 bg-white border-2 border-slate-100 text-slate-400 rounded-2xl flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-blue-100 group-hover:-translate-y-1">
                        {point.icon}
                      </div>
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                        0{idx + 1}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                          {point.title}
                        </h4>
                        <div className="h-px w-12 bg-slate-100 group-hover:w-24 group-hover:bg-blue-200 transition-all duration-500 hidden md:block" />
                      </div>
                      <p className="text-slate-500 text-lg leading-relaxed max-w-xl group-hover:text-slate-700 transition-colors">
                        {point.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000" 
                  alt="Quality Consultation" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl shadow-xl text-white max-w-[240px] hidden md:block">
                <p className="text-3xl font-bold mb-2">100%</p>
                <p className="text-sm font-medium opacity-90">Transparency in COA and MSDS documentation for every batch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Processes Section */}
      <section id="core-processes" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Process-Specific <span className="text-blue-600">Mastery.</span></h3>
            <p className="text-slate-500 text-lg">
              Our products are categorized not just by chemical groups, but by the specific industrial processes they are designed to empower.
            </p>
          </div>
        </div>

                <div className="container mx-auto px-6 space-y-32">
          {expertiseAreas.map((area, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${
                  area.color === 'blue' ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/20' :
                  area.color === 'slate' ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' :
                  'bg-amber-500 text-white shadow-xl shadow-amber-900/20'
                }`}>
                  {area.icon}
                </div>
                <h4 className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-2">{area.subtitle}</h4>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">{area.title}</h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">{area.desc}</p>
                
                <ul className="space-y-4 mb-10">
                  {area.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3 text-slate-800 font-bold">
                      <CheckCircle2 className={`w-6 h-6 ${
                        area.color === 'blue' ? 'text-blue-600' :
                        area.color === 'slate' ? 'text-slate-900' :
                        'text-amber-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/products" 
                  className={`inline-flex items-center gap-2 font-bold transition-all border-b-2 pb-1 ${
                    area.color === 'blue' ? 'text-blue-600 border-blue-600 hover:gap-4' :
                    area.color === 'slate' ? 'text-slate-900 border-slate-900 hover:gap-4' :
                    'text-amber-600 border-amber-600 hover:gap-4'
                  }`}
                >
                  View Related Products <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="rounded-[4rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] relative aspect-[4/3] bg-slate-50 border border-slate-100 group"
                >
                  <ImageWithFallback 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Subtle glass overlay that reveals on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    area.color === 'blue' ? 'bg-blue-600' :
                    area.color === 'slate' ? 'bg-slate-900' :
                    'bg-amber-600'
                  }`} />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Yield Optimization CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -ml-48 -mb-48" />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-3xl"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-white mx-auto mb-10">
                <BarChart4 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">Increase Your Profit Margins Today.</h2>
              <p className="text-xl text-blue-50 mb-12 opacity-90 leading-relaxed">
                Let our consultancy team analyze your current material synthesis path. We help identify 
                inefficiencies and suggest high-purity alternatives that improve final product yield.
              </p>
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl active:scale-95 inline-flex items-center gap-3"
              >
                Book Yield Consultation <ChevronRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-blue-500 mb-4">100+</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Industrial Products</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-4">12+</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">States Covered</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-4">100%</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Documentation Compliance</p>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-500 mb-4">400%</div>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Annual Growth</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}