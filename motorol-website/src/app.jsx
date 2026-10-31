import React, { useState } from 'react';
import { 
  ShieldCheck, Globe, Cpu, Wrench, Zap, Flame, 
  Download, ArrowRight, Phone, Mail, MapPin, Menu, X, 
  ChevronRight, CheckCircle2, SlidersHorizontal 
} from 'lucide-react';

export default function MotorolWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('All');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Product Data across the 5 core segments
  const products = [
    { id: 1, name: 'Motorol Infinity 5W-40', segment: 'Automotive', type: 'Fully Synthetic', api: 'API SP / SN Plus', image: 'https://images.unsplash.com/photo-1635773349479-760773d32cb5?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Motorol Heavy Duty 15W-40', segment: 'Automotive', type: 'Mineral', api: 'API CI-4 / E7', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Motorol Hydrol AW 68', segment: 'General Equipment', type: 'Anti-Wear Hydraulic', api: 'ISO VG 68', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Motorol Merol Rolling Oil 40', segment: 'Metal Working', type: 'Cold Rolling Fluid', api: 'Industrial Grade', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600' },
    { id: 5, name: 'Motorol Transcool Transformer Oil', segment: 'Electrical', type: 'Insulating Oil', api: 'IEC 60296', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=600' },
    { id: 6, name: 'Motorol Syngear 75W-90', segment: 'Speciality', type: 'Synthetic Gear Oil', api: 'API GL-5', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
  ];

  const filteredProducts = selectedSegment === 'All' 
    ? products 
    : products.filter(p => p.segment === selectedSegment);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Top Banner Bar */}
      <div className="bg-[#12161D] border-b border-white/5 py-2 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-500" /> +971 50 189 7928</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-amber-500" /> sales@motorollubes.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-medium">ISO 9001 & ISO 17025 Certified</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline">Global Export Network: UAE, India, Kenya, Tanzania, Oman</span>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0B0D10]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-wider uppercase text-white flex items-center gap-2">
              MOTOROL<span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#products" className="hover:text-amber-400 transition-colors">Products</a>
            <a href="#segments" className="hover:text-amber-400 transition-colors">Segments</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">Heritage (1970)</a>
            <a href="#presence" className="hover:text-amber-400 transition-colors">Global Presence</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setInquiryModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-amber-500/20"
            >
              Request Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12161D] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300">Products</a>
            <a href="#segments" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300">Segments</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300">Heritage</a>
            <a href="#presence" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300">Global Presence</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setInquiryModalOpen(true); }}
              className="w-full bg-amber-500 text-black font-semibold py-2.5 rounded-lg text-sm mt-2"
            >
              Request Quote
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#0B0D10] to-[#0B0D10] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" /> Over 50 Years of Engineering Excellence
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                Creating Warriors for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Engines.</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                Precision-formulated synthetic and mineral lubricants designed for high-stress automotive, industrial, metalworking, and electrical applications worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#products" 
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-amber-500/20"
                >
                  Explore Catalog <ArrowRight className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setInquiryModalOpen(true)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
                >
                  Bulk & Distributor Inquiry
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white">1970</div>
                  <div className="text-xs text-slate-400">Established Heritage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5 Core</div>
                  <div className="text-xs text-slate-400">Industry Sectors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ISO & OEM</div>
                  <div className="text-xs text-slate-400">Verified Quality</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-[#12161D] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
                    <img 
                      src="https://images.unsplash.com/photo-1635773349479-760773d32cb5?auto=format&fit=crop&q=80&w=800" 
                      alt="Motorol Lubricants Flagship" 
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-amber-400 border border-amber-500/30">
                      Fully Synthetic
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-white">Motorol Infinity 5W-40</h3>
                      <p className="text-xs text-slate-400 mt-0.5">High-Performance Passenger Car Motor Oil</p>
                    </div>
                    <span className="text-xs bg-amber-500/10 text-amber-400 px-2 py-1 rounded font-mono">API SP</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5 Primary Segments (Bento Grid) */}
      <section id="segments" className="py-24 bg-[#0E1116] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Comprehensive Solutions</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-white">Five Primary Operating Segments</h3>
            <p className="text-slate-400">Engineered precisely to fulfill the extreme temperature and load demands across global industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Automotive', icon: <Wrench className="w-6 h-6 text-amber-400" />, desc: 'Passenger cars, heavy-duty trucks, two-wheelers & gear oils.', img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=500' },
              { title: 'General Equipment', icon: <Cpu className="w-6 h-6 text-amber-400" />, desc: 'Hydraulic systems, industrial turbines & compressor fluids.', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=500' },
              { title: 'Metal Working', icon: <Flame className="w-6 h-6 text-amber-400" />, desc: 'Cold rolling oils, neat & soluble cutting fluids.', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=500' },
              { title: 'Electrical', icon: <Zap className="w-6 h-6 text-amber-400" />, desc: 'High-dielectric transformer and insulating oils.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=500' },
              { title: 'Speciality', icon: <ShieldCheck className="w-6 h-6 text-amber-400" />, desc: 'Custom synthetic esters and niche industrial greases.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500' },
            ].map((seg, idx) => (
              <div 
                key={idx}
                onClick={() => { setSelectedSegment(seg.title); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative bg-[#151921] border border-white/5 rounded-xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src={seg.img} alt={seg.title} className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg w-fit">
                    {seg.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{seg.title}</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{seg.desc}</p>
                  </div>
                </div>
                <div className="relative z-10 pt-6 flex items-center gap-1 text-xs font-semibold text-amber-400">
                  Browse Catalog <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Products & Filter Section */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">High-Performance Range</h2>
            <h3 className="text-3xl font-black text-white">Featured Product Lineup</h3>
          </div>

          {/* Segment Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Automotive', 'General Equipment', 'Metal Working', 'Electrical', 'Speciality'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedSegment(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedSegment === cat 
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' 
                    : 'bg-[#151921] border border-white/10 text-slate-300 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="bg-[#12161D] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all">
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-black/40 relative">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-amber-400 border border-white/10">
                    {prod.segment}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-white">{prod.name}</h4>
                    <span className="text-xs font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
                      {prod.api}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">Type: {prod.type}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-4">
                <button 
                  onClick={() => alert(`Downloading Technical Data Sheet (TDS) for ${prod.name}...`)}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-amber-400 font-medium transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-500" /> Download TDS (PDF)
                </button>
                <button 
                  onClick={() => { setSelectedProduct(prod.name); setInquiryModalOpen(true); }}
                  className="bg-white/5 hover:bg-amber-500 hover:text-black text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all border border-white/10"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage & Who We Are */}
      <section id="about" className="py-24 bg-[#0E1116] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Our Heritage</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-white">50 Years of Forging Reliability Across Borders</h3>
              <p className="text-slate-400 leading-relaxed">
                Starting our journey 50 years ago in India, Motorol has evolved strategically to operate blending facilities and distribution networks across the United Arab Emirates, Kenya, India, Tanzania, and Oman. We combine state-of-the-art laboratory testing (ISO 17025) with rigorous ISO 9001 governance to deliver dependable power to engines worldwide.
              </p>
              
              <div className="space-y-3 pt-2">
                {[
                  'Advanced additive packaging sourced from global leaders (Lubrizol, Chevron Oronite, Sinopec)',
                  'Blending plants optimized for quick turnaround and stringent quality control',
                  'Revolving customs bond frameworks ensuring zero cash-VAT lockup for East African exports'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#151921] border border-white/10 rounded-2xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
                <h4 className="text-xl font-bold text-white">Direct Executive Leadership</h4>
                <p className="text-sm text-slate-400">
                  Managed under an international lubricants group encompassing Maximus International Limited, Quantum Lubricants E.A. Limited, Maximus Global FZE, and Huajie Global Pte. Ltd.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-amber-400 font-bold text-lg">ISO 9001</div>
                    <div className="text-xs text-slate-400">Quality Management Systems</div>
                  </div>
                  <div>
                    <div className="text-amber-400 font-bold text-lg">ISO 17025</div>
                    <div className="text-xs text-slate-400">Testing & Calibration Labs</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section id="presence" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-2">Global Footprint</h2>
        <h3 className="text-3xl font-black text-white mb-6">Manufacturing & Distribution Network</h3>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Strategically positioned assets spanning the Middle East, East Africa, and South Asia to serve industrial fleets and retail distributors seamlessly.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { country: 'United Arab Emirates', role: 'HQ & Blending Facility (Ras Al Khaimah / Dubai)' },
            { country: 'Kenya', role: 'East Africa Hub & Nairobi Blending Plant' },
            { country: 'India', role: 'Manufacturing & R&D Center (Maximus Advance Fluids)' },
            { country: 'Tanzania & Uganda', role: 'Direct EAC Distribution & Customs Bond Corridor' },
          ].map((loc, i) => (
            <div key={i} className="bg-[#12161D] border border-white/10 p-6 rounded-xl text-left space-y-2">
              <MapPin className="w-5 h-5 text-amber-500" />
              <h4 className="font-bold text-white text-base">{loc.country}</h4>
              <p className="text-xs text-slate-400">{loc.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08090C] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-xl font-black uppercase text-white">MOTOROL</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Creating warriors for your engines. Premium industrial and automotive lubricants manufactured to exacting international specifications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-amber-400">Our Products</a></li>
              <li><a href="#segments" className="hover:text-amber-400">Five Segments</a></li>
              <li><a href="#about" className="hover:text-amber-400">About Heritage</a></li>
              <li><a href="#presence" className="hover:text-amber-400">Global Presence</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contact & Support</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Phone: +971 50 189 7928</li>
              <li>Landline: +971 7 228 7506</li>
              <li>Email: sales@motorollubes.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Certifications</h4>
            <p className="text-xs text-slate-400 mb-4">ISO 9001 | ISO 17025 | OEM Approved Formulations</p>
            <button 
              onClick={() => setInquiryModalOpen(true)}
              className="w-full bg-amber-500 text-black font-semibold py-2.5 rounded-lg text-xs transition-all"
            >
              Request Bulk Quote
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 mt-10 border-t border-white/5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MOTOROL Lubricants. All rights reserved.
        </div>
      </footer>

      {/* Bulk Inquiry & Quote Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12161D] border border-white/10 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative space-y-6 shadow-2xl">
            <button 
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-white">Request Bulk or Distributor Quote</h3>
              <p className="text-xs text-slate-400 mt-1">
                {selectedProduct ? `Inquiring about: ${selectedProduct}` : 'Fill in your details for prompt quotation and logistics support.'}
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted successfully! Our sales team will contact you shortly.'); setInquiryModalOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name / Company Name</label>
                <input required type="text" placeholder="e.g. Al-Futtaim Fleet Management" className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <input required type="email" placeholder="name@company.com" className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                  <input required type="text" placeholder="+971 50 XXX XXXX" className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Required Volume / Packaging</label>
                <select className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500">
                  <option>Cartons / 1L & 4L Bottles</option>
                  <option>20L Pails / Buckets</option>
                  <option>208L Steel Drums (Bulk)</option>
                  <option>IBC Totes / Flexibags (Export)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Message / Specifications Needed</label>
                <textarea rows="3" placeholder="Specify viscosity grade, port of destination, or custom requirements..." className="w-full bg-[#0B0D10] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"></textarea>
              </div>

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-amber-500/20">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}