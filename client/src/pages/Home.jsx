import { Search, MapPin, Briefcase, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const allJobs = [
    { id: 1, title: 'Software Engineer', company: 'CloudTech', location: 'San Francisco, CA', salary: '$120k - $160k', type: 'Full-time' },
    { id: 2, title: 'Frontend Developer', company: 'PixelPerfect', location: 'Remote', salary: '$90k - $130k', type: 'Contract' },
    { id: 3, title: 'Product Manager', company: 'Skyline Inc', location: 'New York, NY', salary: '$140k - $180k', type: 'Full-time' },
    { id: 4, title: 'UI/UX Designer', company: 'CreativeFlow', location: 'Austin, TX', salary: '$100k - $140k', type: 'Internship' },
  ];

  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Find your next <span className="text-gradient">Career Goal</span> <br /> with SmartHire
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Browse through thousands of job opportunities from top companies and find the perfect match for your skills.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto glass p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center gap-2 shadow-2xl">
              <div className="flex-1 flex items-center gap-3 px-4 w-full">
                <Search className="text-slate-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Job title, keywords..." 
                  className="bg-transparent border-none outline-none text-white w-full py-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="h-10 w-px bg-white/10 hidden md:block"></div>
              <div className="flex-1 flex items-center gap-3 px-4 w-full">
                <MapPin className="text-slate-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="bg-transparent border-none outline-none text-white w-full py-3"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-500 rounded-full font-bold transition-all shadow-lg shadow-primary-500/30">
                Search Jobs
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: 'Live Jobs', value: '12K+', icon: Briefcase },
              { label: 'Companies', value: '450+', icon: TrendingUp },
              { label: 'Candidates', value: '80K+', icon: Users },
              { label: 'Placements', value: '5K+', icon: CheckCircle },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="text-primary-400 w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Placeholder */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest Job Openings</h2>
              <p className="text-slate-400">Discover fresh opportunities posted recently</p>
            </div>
            <button className="text-primary-400 font-semibold hover:text-primary-300 transition-colors">
              View All Jobs →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? filteredJobs.map((job) => (
              <div key={job.id} className="glass p-6 rounded-2xl hover:bg-white/[0.07] transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-bold text-xl">
                    {job.company[0]}
                  </div>
                  <span className="text-xs bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full border border-primary-500/20">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{job.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{job.company} • {job.location}</p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="font-semibold">{job.salary}</span>
                  <button className="text-sm font-medium hover:underline">Details</button>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-500 text-lg">No jobs found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
