import { useParams, Link } from 'react-router-dom';
import { MapPin, Briefcase, Calendar, DollarSign, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const JobDetails = () => {
  const { id } = useParams();
  
  // Placeholder data - would come from API
  const job = {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    location: 'Remote',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    posted: '2 days ago',
    description: 'We are looking for an experienced Frontend Developer to lead our UI team. You will be responsible for building high-quality, scalable web applications using React and Tailwind CSS.',
    requirements: [
      '5+ years of experience with React.js',
      'Strong understanding of CSS and Tailwind',
      'Experience with state management (Redux/Zustand)',
      'Excellent communication and leadership skills'
    ],
    benefits: [
      'Fully remote work environment',
      'Health, Dental, and Vision insurance',
      '401(k) matching',
      'Flexible PTO'
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link to="/jobs" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass p-8 rounded-[40px] border-white/10">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-primary-600/10 rounded-3xl flex items-center justify-center text-primary-400 font-bold text-3xl border border-primary-500/20">
                {job.company[0]}
              </div>
              <div>
                <h1 className="text-3xl font-black mb-2">{job.title}</h1>
                <p className="text-xl text-primary-400 font-bold">{job.company}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/5">
              <div className="space-y-1">
                <div className="text-slate-500 text-xs font-bold uppercase flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Location</div>
                <div className="font-semibold text-sm">{job.location}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-500 text-xs font-bold uppercase flex items-center gap-1.5"><Briefcase className="w-3 h-3" /> Job Type</div>
                <div className="font-semibold text-sm">{job.type}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-500 text-xs font-bold uppercase flex items-center gap-1.5"><DollarSign className="w-3 h-3" /> Salary</div>
                <div className="font-semibold text-sm">{job.salary}</div>
              </div>
              <div className="space-y-1">
                <div className="text-slate-500 text-xs font-bold uppercase flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Posted</div>
                <div className="font-semibold text-sm">{job.posted}</div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-slate-400 leading-relaxed">{job.description}</p>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="glass p-8 rounded-[40px] border-white/10 sticky top-24">
            <h3 className="text-xl font-bold mb-6">Apply for this position</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Submit your resume and cover letter to be considered for this role at {job.company}.
            </p>
            <button className="w-full bg-primary-600 hover:bg-primary-500 py-4 rounded-2xl font-bold shadow-lg shadow-primary-600/20 transition-all mb-4">
              Apply Now
            </button>
            <button className="w-full bg-white/5 hover:bg-white/10 py-4 rounded-2xl font-bold border border-white/10 transition-all">
              Save for later
            </button>
            
            <div className="mt-10 pt-10 border-t border-white/5">
              <h4 className="font-bold mb-4">About the company</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                TechFlow Solutions is a leading software company specializing in cloud infrastructure and developer tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
