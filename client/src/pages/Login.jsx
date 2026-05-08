import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, Github } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Logic will be added when backend is ready
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass p-8 rounded-3xl border-white/10 shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-slate-400">Enter your details to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type="email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-xs text-primary-400 hover:underline">Forgot password?</a>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary-400 transition-colors" />
              <input 
                type={showPassword ? "text" : "password"}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-12 outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-500 py-4 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" /> Sign In
          </button>
        </form>

        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute w-full h-px bg-white/10"></div>
            <span className="relative bg-[#020617] px-4 text-xs text-slate-500 uppercase tracking-widest font-bold">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-2xl hover:bg-white/10 transition-all font-medium">
              <Github className="w-5 h-5" /> GitHub
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-3 rounded-2xl hover:bg-white/10 transition-all font-medium">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.896 4.136-1.248 1.248-3.224 2.536-7.224 2.536-6.624 0-11.752-5.36-11.752-12s5.128-12 11.752-12c3.576 0 6.264 1.416 8.152 3.208l2.328-2.328C18.96 1.488 15.896 0 12.48 0 5.592 0 0 5.592 0 12.48s5.592 12.48 12.48 12.48c3.752 0 6.576-1.24 8.76-3.528 2.256-2.256 2.968-5.416 2.968-8.08 0-.8-.064-1.536-.184-2.24H12.48z"/></svg> Google
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-slate-400 text-sm">
          Don't have an account? <Link to="/register" className="text-primary-400 font-bold hover:underline">Create Account</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
