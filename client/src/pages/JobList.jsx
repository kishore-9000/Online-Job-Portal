import { useState } from 'react';
import { Search, MapPin, Briefcase, Filter, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [filter, setFilter] = useState('All');
  
  const jobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'TechFlow', location: 'Remote', salary: '$120k - $150k', type: 'Full-time', category: 'Engineering' },
    { id: 2, title: 'UX Designer', company: 'Studio Nine', location: 'New York, NY', salary: '$90k - $120k', type: 'Full-time', category: 'Design' },
    { id: 3, title: 'Backend Engineer', company: 'DataScale', location: 'San Francisco, CA', salary: '$130k - $170k', type: 'Contract', category: 'Engineering' },
    { id: 4, title: 'Marketing Manager', company: 'BrightSeed', location: 'Austin, TX', salary: '$80k - $110k', type: 'Full-time', category: 'Marketing' },
    { id: 5, title: 'DevOps Specialist', company: 'CloudNet', location: 'Remote', salary: '$140k - $180k', type: 'Full-time', category: 'Engineering' },
  ];

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2">Explore Jobs</h1>
          <p className="text-slate-400">Discover your next career move from 500+ openings</p>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
          {['All', 'Engineering', 'Design', 'Marketing'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat ? 'bg-primary-600 border-primary-600 text-white' : 'border-white/10 hover:bg-white/5 text-slate-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredJobs.map((job, index) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-6 rounded-3xl hover:bg-white/[0.07] transition-all group flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-16 h-16 bg-primary-600/10 rounded-2xl flex items-center justify-center text-primary-400 font-bold text-2xl border border-primary-500/20">
                {job.company[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary-400 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.company}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="bg-white/5 px-3 py-1 rounded-full text-xs border border-white/10">{job.type}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-8 border-t md:border-t-0 border-white/5 pt-4 md:pt-0">
              <div className="text-right">
                <div className="text-lg font-bold">{job.salary}</div>
                <div className="text-xs text-slate-500 font-medium">per year</div>
              </div>
              <Link to={`/jobs/${job.id}`} className="bg-primary-600 hover:bg-primary-500 px-6 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-primary-600/20 flex items-center gap-2">
                Details <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
