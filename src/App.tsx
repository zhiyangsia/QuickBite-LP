import { useState } from 'react';
import { 
  Clock, 
  Zap, 
  TrendingDown, 
  Search, 
  Smartphone, 
  Calendar, 
  Bell, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Menu,
  X,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import LogoImg from './assets/images/regenerated_image_1778820992688.jpg';
import HeroImg from './assets/images/regenerated_image_1778682076766.png';
import TestimonialImg1 from './assets/images/regenerated_image_1778683436041.png';
import TestimonialImg2 from './assets/images/regenerated_image_1778683436809.png';
import DemoMockupImg from './assets/images/regenerated_image_1778766052214.png';
import DemoMockupVendorImg from './assets/images/regenerated_image_1778766284622.png';

const PrimaryColor = "#EF8B19";
const SecondaryColor = "#9A5302";
const NeutralColor = "#F9CD9C";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center">
              <img 
                src={LogoImg} 
                alt="QuickBite Logo" 
                className="w-14 h-14 object-contain mb-[3px]" 
              />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary btn-poppins leading-none">
                READY WHEN YOU ARE.
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.location.href = 'https://zhiyangsia.github.io/QuickBite-MVP'}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold btn-poppins transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Join the Waitlist
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <button 
                onClick={() => window.location.href = 'https://zhiyangsia.github.io/QuickBite-MVP'}
                className="w-full bg-primary text-white px-6 py-3 rounded-full text-base font-bold btn-poppins"
              >
                Join the Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold font-display pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-primary flex-shrink-0" /> : <ChevronDown className="text-gray-400 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [demoMode, setDemoMode] = useState<'student' | 'vendor'>('student');

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-neutral-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
                Pre-order Campus Food. <span className="text-primary">Skip the Queue.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6 max-w-xl">
                The smart food pre-ordering app exclusively for MMU students, staff, and visitors. Order ahead, schedule your pickup, and reclaim your lunchtime.
              </p>

              <button 
                onClick={() => window.location.href = 'https://zhiyangsia.github.io/QuickBite-MVP'}
                className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-lg font-bold btn-poppins transition-all transform hover:scale-105 shadow-xl shadow-primary/30"
              >
                Get Early Access
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={HeroImg} 
                  alt="Students enjoying food" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold font-display uppercase tracking-wider text-secondary">MMU Exclusive</div>
                    <div className="text-gray-500 text-xs">For students & vendors</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Wasting Your Break in Long Lines?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              During peak hours, MMU students, staff, and visitors face excessive waiting times and chaotic congestion at limited food stalls. This inefficiency wastes your valuable time, creates stress, and ruins your daily productivity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clock size={40} />, title: "Time Wasted", desc: "No more standing for 40 minutes just to get a simple lunch." },
              { icon: <Zap size={40} />, title: "High Stress", desc: "Reduce the anxiety of rushing between classes and food lines." },
              { icon: <TrendingDown size={40} />, title: "Low Productivity", desc: "Recover your energy and focus without the lunchtime chaos." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-secondary bg-white rounded-xl shadow-editorial group hover:bg-secondary transition-all duration-300"
              >
                <div className="text-primary group-hover:text-white mb-6 transition-colors inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold font-display mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-white/80 transition-colors uppercase text-xs font-bold tracking-widest">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your Fast Track to Food</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Search />, title: "Browse Menus", desc: "View stall details and available dishes instantly." },
              { icon: <Smartphone />, title: "Order Seamlessly", desc: "Order and pay via the app from your lecture hall." },
              { icon: <Calendar />, title: "Schedule Pickup", desc: "Choose your exact collection time." },
              { icon: <Bell />, title: "Track Real-Time", desc: "Know exactly when your food is ready." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 font-display">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROOF / PORTFOLIO (MVP Demo Section) */}
      <section id="demo" className="py-24 bg-neutral-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-10">See QuickBite in Action</h2>
            <div className="inline-flex bg-white/50 p-1.5 rounded-full border border-gray-200">
              <button 
                onClick={() => setDemoMode('student')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${demoMode === 'student' ? 'bg-primary text-white shadow-lg' : 'text-secondary hover:text-primary'}`}
              >
                Customer App
              </button>
              <button 
                onClick={() => setDemoMode('vendor')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${demoMode === 'vendor' ? 'bg-primary text-white shadow-lg' : 'text-secondary hover:text-primary'}`}
              >
                Vendor Dashboard
              </button>
            </div>
          </div>

          <div className="relative mt-16 max-w-4xl mx-auto">
             <AnimatePresence mode="wait">
               <motion.div
                 key={demoMode}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4 }}
                 className="bg-white rounded-3xl p-6 shadow-editorial border border-gray-100"
               >
                 <div className="bg-gray-100 rounded-2xl overflow-hidden relative mx-auto shadow-sm aspect-[9/16] max-w-[320px] sm:max-w-[380px]">
                    <img 
                      src={demoMode === 'student' ? DemoMockupImg : DemoMockupVendorImg} 
                      alt="Product interface" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. PROOF / TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center uppercase tracking-widest text-secondary font-bold text-sm mb-16 opacity-60">
          Validated by the MMU Community
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {[
            { 
              quote: "Skipping the 40-minute queue gives me time to actually rest between classes.", 
              author: "Anonymous Student", 
              role: "MMU Student",
              img: TestimonialImg1
            },
            { 
              quote: "Receiving pre-orders systematically helps us prepare meals ahead of time and completely eliminates the lunchtime chaos.", 
              author: "Anonymous Vendor", 
              role: "Campus Food Vendor",
              img: TestimonialImg2
            }
          ].map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-xl shadow-editorial border border-gray-100 relative"
            >
              <span className="text-8xl text-primary/10 absolute top-4 left-6 leading-none select-none">"</span>
              <p className="text-xl text-gray-700 leading-relaxed mb-10 relative z-10 italic">
                {testi.quote}
              </p>
              <div className="flex items-center space-x-4">
                <img src={testi.img} alt={testi.author} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" referrerPolicy="no-referrer" />
                <div className="text-left">
                  <div className="font-bold text-lg font-display">{testi.author}</div>
                  <div className="text-primary text-xs font-bold uppercase tracking-widest">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT US */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center"
          >
            <Smartphone size={40} className="text-white" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Built by Students, For the MMU Community</h2>
          <p className="text-white/80 text-xl leading-relaxed max-w-3xl">
            We are MMU students who got tired of skipping lunch. QuickBite was born to offer a stress-free dining experience for the MMU Community and a systematic order management tool for our hardworking campus vendors.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
              question="How do vendors receive my order?" 
              answer="Through our dedicated, easy-to-use vendor dashboard that systematically lists all pre-scheduled pickups. They can see what's coming next and prepare dishes just-in-time."
            />
            <FAQItem 
              question="What if I am late for my scheduled pickup?" 
              answer="Vendors have a grace period to keep your food securely packaged and ready in a designated area. However, we recommend sticking to your window to ensure your meal is as fresh as possible!"
            />
             <FAQItem 
              question="Is it MMU Cyberjaya or Melaka?" 
              answer="QuickBite is currently serving the MMU Melaka campus! We are expanding to other locations soon, so sign up for the waitlist to be notified when we launch elsewhere."
            />
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION (Bottom) */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to Own Your Time?</h2>
            <p className="text-white/90 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto font-medium">
              Stop waiting in line. Join the QuickBite waitlist today and be the first to experience the future of MMU campus dining.
            </p>
            <button 
              onClick={() => window.location.href = 'https://zhiyangsia.github.io/QuickBite-MVP'}
              className="bg-white text-primary hover:bg-neutral-accent hover:text-secondary px-12 py-6 rounded-full text-xl font-bold btn-poppins transition-all transform hover:scale-105 shadow-2xl shadow-black/10"
            >
              Get Early Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-secondary py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">© 2026 QuickBite. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
