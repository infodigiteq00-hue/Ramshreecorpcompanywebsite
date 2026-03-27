import { Link } from "react-router";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import logoImg from "figma:asset/ba0cf2dd2fb8682930e35518b3207e18b00742cf.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand & Mission */}
        <div className="space-y-6">
          <Link to="/" className="inline-block p-2 bg-white rounded-xl">
            <img 
              src={logoImg} 
              alt="Ramshree Corporation" 
              className="h-16 w-auto object-contain" 
            />
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Pioneering excellence in chemical consultancy and supply since 2014. 
            Personalized solutions for complex synthesis processes across India.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Our Founder</Link></li>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Product Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Request a Sample</Link></li>
          </ul>
        </div>

        {/* Industrial Hubs */}
        <div>
          <h4 className="text-white font-bold mb-6">Industrial Reach</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Jhagadia & Dahej</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Surat & Sachin</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> Saykha GIDC</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-500" /> PAN India Logistics</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+91 91730 00002</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span>ramshree.corp@rediffmail.com</span>
                <span>info@ramshreecorp.com</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>213 Umang Complex, Kapodra Patia, G.I.D.C Ankleshwar</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Plot No. 47,48 Sudhama Industrial State, GIDC Ankleshwar, 393002</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {currentYear} Ramshree Corporation. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500">Terms of Service</a>
          <a href="#" className="hover:text-blue-500">Quality Policy</a>
        </div>
      </div>
    </footer>
  );
}