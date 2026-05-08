import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-bold tracking-tight mb-6 block">Smart<span className="text-primary-400">Hire</span></span>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Connecting world-class talent with industry-leading companies. Your journey to a dream career starts here.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Candidates</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Job Alerts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Applied Jobs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Recruiters</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Browse Candidates</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hiring Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2024 SmartHire System. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="#" className="hover:text-slate-300">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
