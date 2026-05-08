import { Link } from 'react-router-dom';
import { Briefcase, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="bg-primary-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
          <Briefcase className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Smart<span className="text-primary-400">Hire</span></span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <Link to="/jobs" className="hover:text-white transition-colors">Find Jobs</Link>
        <Link to="/" className="hover:text-white transition-colors">Companies</Link>
        <Link to="/" className="hover:text-white transition-colors">About Us</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm font-medium hover:text-white transition-colors hidden sm:block">
          Post a Job
        </Link>
        <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block"></div>
        <Link to="/login" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all">
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </Link>
        <Link to="/register" className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-500 transition-all font-semibold shadow-lg shadow-primary-500/20">
          <span>Sign Up</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
