import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronRight, FlaskConical, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import synthesisProcess from "figma:asset/4b88c8bde996c7f813d9440330efc4651e6d90d5.png";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-36 pb-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1710313316187-f94f36d86613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Advanced Chemical Manufacturing"
          className="w-full h-full object-cover opacity-50"
        />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Cinematic deep gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          
          {/* Brand atmospheric lighting */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_15%_35%,rgba(37,99,235,0.18),transparent_60%)] z-20" />
          
          {/* Subtle moving light effect for life */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600/10 blur-[120px] rounded-full z-0" 
          />
          
          {/* Technical grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay z-30" />
          
          {/* Grounding bottom gradient */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 to-transparent z-20" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Precision <span className="text-blue-500 italic">Chemistry.</span> <br /> 
            Expert Solutions.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
            More than just a supplier. We are your personalized chemical consultants, 
            bridging the gap between complex synthesis requirements and high-quality raw materials.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/expertise"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-900/20 flex items-center gap-2 group active:scale-95"
            >
              Our Expertise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm rounded-xl font-bold transition-all flex items-center gap-2 active:scale-95"
            >
              Explore Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Products</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Years Experience</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-xs uppercase tracking-widest text-slate-400">Quality Verified</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10 aspect-square max-w-md mx-auto">
            <ImageWithFallback
              src={synthesisProcess}
              alt="Laboratory Synthesis Process"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-600/20 blur-3xl rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/20 rounded-full scale-110 animate-pulse pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}