import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Briefcase, ChevronRight, UserPlus } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState('candidate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register attempt:', { ...formData, role });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl glass p-8 md:p-12 rounded-[40px] border-white/10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black mb-3">Create Account</h2>
          <p className="text-slate-400">Join SmartHire and start your journey today</p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1.5 bg-white/5 rounded-2xl mb-10">
          <button 
            onClick={() => setRole('candidate')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold ${role === 'candidate' ? 'bg-primary-600 shadow-lg text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <User className="w-4 h-4" /> Candidate
          </button>
          <button 
            onClick={() => setRole('recruiter')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold ${role === 'recruiter' ? 'bg-primary-600 shadow-lg text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Briefcase className="w-4 h-4" /> Recruiter
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="password" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                placeholder="At least 8 characters"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>

          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" required className="mt-1 accent-primary-600" id="terms" />
            <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed">
              I agree to the <a href="#" className="text-primary-400 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-400 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-500 py-4 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" /> Create Account
          </button>
        </form>

        <p className="mt-10 text-center text-slate-400 text-sm">
          Already have an account? <Link to="/login" className="text-primary-400 font-bold hover:underline">Sign In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
