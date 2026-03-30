import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, Globe, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import React, { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    // Scroll to top when landing on /contact without hash
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const WEB3FORMS_ACCESS_KEY = "21b09390-8757-47f4-aa33-05e670302732";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "Yield Audit - Ramshree Corporation");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json().catch(() => null);

      if (res.ok && json?.success) {
        toast.success("Thank you! Our consultancy team will reach out to you within 24 hours.");
        formEl.reset();
        return;
      }

      const message = json?.body?.message || json?.message || "Unable to submit your request.";
      toast.error(message);
    } catch {
      toast.error("Network error while submitting the form. Please try again.");
    }
  };

  const industrialHubs = [
    { name: "Jhagadia", focus: "Heavy Chemicals & Intermediates" },
    { name: "Dahej", focus: "Petrochemicals & Bulk Supply" },
    { name: "Surat / Sachin", focus: "Specialty Chemicals & Pharma" },
    { name: "Saykha", focus: "Dyes, Pigments & Textiles" },
  ];

  return (
    <div className="pt-24 bg-slate-50/50">
      {/* Header - Dark Blue Theme */}
      <section className="bg-[#0B1221] py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Globe className="w-[1000px] h-[1000px] absolute -right-60 -top-60" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Let's Start a <span className="text-blue-500 italic">Consultation.</span>
          </motion.h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed opacity-80">
            Whether you need a specific molecule or process-level consultancy, <br className="hidden md:block" />
            our team is ready to optimize your production.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="yield-audit">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: The Intelligence Dashboard (Info) */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Access <span className="text-slate-400 font-normal">Channels</span></h2>
                
                <div className="space-y-10">
                  {[
                    { icon: <Phone className="w-5 h-5" />, label: "Priority Hotline", val: "+91 91730 00002", sub: "Mon - Sat, 9am - 7pm IST", color: "slate" },
                    { icon: <Mail className="w-5 h-5" />, label: "Consultancy Desk", val: "ramshree.corp@rediffmail.com", sub: "info@ramshreecorporation.in", color: "slate", isEmail: true },
                    { icon: <MapPin className="w-5 h-5" />, label: "Office", val: "213 Umang Complex, Kapodra Patia, G.I.D.C Ankleshwar", sub: "", color: "slate" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Warehouse", val: "Plot No. 47,48 Sudhama Industrial State, GIDC Ankleshwar, 393002", sub: "", color: "slate" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:text-blue-500 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">{item.label}</p>
                        <h4 className={`font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-tight ${item.isEmail ? 'text-base' : 'text-lg'}`}>{item.val}</h4>
                        {item.sub && <p className={`mt-1 ${item.isEmail ? 'text-base font-bold text-slate-800' : 'text-sm text-slate-400 font-medium'}`}>{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex gap-3">
                    {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 bg-slate-50 text-slate-300 rounded-xl flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Reach</span>
                </div>
              </div>
            </div>

            {/* Right: The Inquiry Engine (Advanced Form) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-slate-100 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Request a <span className="text-blue-500/70 italic font-medium">Yield Audit.</span></h2>
                    <p className="text-slate-400 text-sm font-medium mt-2">Professional synthesis review and process optimization inquiry.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Identity</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Pramod Sharma"
                          className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-200 transition-all text-slate-900 font-medium placeholder:text-slate-300 outline-none"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Corporate Entity</label>
                        <input
                          required
                          type="text"
                          name="company"
                          placeholder="e.g. Pharma Solutions Ltd"
                          className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-200 transition-all text-slate-900 font-medium placeholder:text-slate-300 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Professional Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="name@company.com"
                          className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-200 transition-all text-slate-900 font-medium placeholder:text-slate-300 outline-none"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Direct Contact</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-200 transition-all text-slate-900 font-medium placeholder:text-slate-300 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Synthesis Requirements</label>
                      <textarea
                        rows={4}
                        name="message"
                        placeholder="Describe your industrial process..."
                        className="w-full px-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/5 focus:bg-white focus:border-blue-200 transition-all text-slate-900 font-medium placeholder:text-slate-300 resize-none outline-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-4 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]">
                      Send Inquiry <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Logistics Banner - Lighter Version */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -mr-64 -mt-64" />
            
            <div className="relative z-10 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-blue-400" />
                    Regional Presence
                  </h3>
                  <p className="text-slate-400 font-medium">Strategic distribution across the Gujarat Chemical Belt.</p>
                </div>
                <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-slate-300">
                   <Globe className="w-4 h-4" />
                   <span>Supply Chain Network</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {industrialHubs.map((hub) => (
                  <div key={hub.name} className="p-8 bg-slate-50/50 border border-slate-100/50 rounded-[2.5rem] transition-all hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5">
                    <div className="text-slate-900 font-bold text-lg mb-1">{hub.name}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-bold leading-relaxed">{hub.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Mockup */}
      <section className="h-[400px] bg-slate-200 relative">
        <div className="absolute inset-0 grayscale opacity-50 contrast-125 bg-[url('https://images.unsplash.com/photo-1763752194641-3c5638aec65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl text-center max-w-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Industrial Presence</h4>
            <p className="text-slate-500 text-sm">Strategic distribution centers across the Gujarat chemical belt and PAN India logistics.</p>
          </div>
        </div>
      </section>
    </div>
  );
}