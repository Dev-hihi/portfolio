import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, ArrowRight, Mail, Database, Code, 
  TrendingUp, Users, Smartphone, Globe, ExternalLink, CheckCircle 
} from 'lucide-react';

// Animation Variants (Cấu hình chuyển động)
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-bcons-dark text-white font-sans selection:bg-bcons-gold selection:text-black overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/5 backdrop-blur-md bg-bcons-dark/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-bcons-gold to-orange-600 rounded-lg flex items-center justify-center text-black font-black shadow-lg shadow-orange-500/20">P</div>
            <span>P.DONG<span className="text-bcons-gold">.DEV</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-bcons-gold transition-colors">About</a>
            <a href="#skills" className="hover:text-bcons-gold transition-colors">Skills</a>
            <a href="#projects" className="hover:text-bcons-gold transition-colors">Projects</a>
          </div>
          <button className="bg-bcons-gold hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            Contact Me
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bcons-gold/10 border border-bcons-gold/20 text-bcons-gold text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bcons-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bcons-gold"></span>
            </span>
            OPEN TO WORK
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-bcons-gold to-yellow-200">Business</span> <br />
            <span className="text-white decoration-bcons-red decoration-4 underline underline-offset-4">Real Estate</span> Tech.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            Hi, I'm <strong className="text-white">Nguyen Phuong Dong</strong>. 
            <br/>Student at <span className="text-orange-500 font-bold">FPT University</span> (Int'l Business). 
            <br/>Working at <span className="text-bcons-gold font-bold">Bcons Group</span>.
            <br/><span className="italic text-sm mt-2 block text-gray-500">Blending financial logic with modern web technologies.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-bcons-gold to-orange-500 text-black px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-orange-500/20">
              View Projects <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 rounded-lg font-bold border border-gray-700 hover:border-bcons-gold hover:text-bcons-gold transition-all flex items-center gap-2">
              <Mail size={20} /> Email Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-bcons-gold/20 rounded-full blur-[100px]"></div>
          <div className="relative glass-card rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl border border-gray-700">
            <div className="flex justify-between items-start mb-8">
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="text-xs font-mono text-gray-500">bcons-analytics.js</div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="text-bcons-gold mb-1"><Database size={20}/></div>
                  <div className="text-2xl font-bold">128+</div>
                  <div className="text-xs text-gray-400">Deals Closed</div>
                </div>
                <div className="flex-1 bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="text-bcons-red mb-1"><Code size={20}/></div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-gray-400">Digital</div>
                </div>
              </div>
              <div className="h-32 bg-gray-900 rounded-lg border border-white/5 flex items-center justify-center">
                 <span className="font-mono text-gray-500"> &lt;FPT_Student /&gt; </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SKILLS SECTION (The Hybrid Mindset) --- */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-bcons-gold">Hybrid</span> Advantage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Không chỉ là Code. Tôi mang tư duy Kinh doanh Quốc tế vào từng dòng lệnh.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tech Stack */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-card p-8 rounded-2xl hover:border-bcons-gold/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><Code size={24}/></div>
                <h3 className="text-2xl font-bold">Technical Stack</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['ReactJS', 'Tailwind CSS', 'Python', 'Git/GitHub', 'Data Analysis', 'Automation'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-bcons-gold"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Mindset */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-card p-8 rounded-2xl hover:border-bcons-red/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/10 text-red-400 rounded-lg"><TrendingUp size={24}/></div>
                <h3 className="text-2xl font-bold">Business Mindset</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Int\'l Business', 'Real Estate', 'Market Research', 'Financial Logic', 'Digital Marketing', 'CRM Systems'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-bcons-red"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-bcons-gold to-orange-500">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="Bcons Digital Sales"
              category="Business & Tech"
              description="Hệ thống Landing Page hỗ trợ đội ngũ kinh doanh Bcons, tối ưu hóa trải nghiệm khách hàng xem căn hộ."
              tags={['React', 'UX/UI', 'Real Estate']}
              color="text-bcons-gold"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="Market Analysis Tool"
              category="Data Science"
              description="Công cụ phân tích xu hướng bất động sản khu vực Đông Sài Gòn dựa trên dữ liệu Big Data."
              tags={['Python', 'Pandas', 'Excel']}
              color="text-blue-400"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="FPT Capstone"
              category="Academic"
              description="Dự án tốt nghiệp chuyên ngành Kinh doanh Quốc tế: Chiến lược thâm nhập thị trường số."
              tags={['Research', 'Strategy', 'Marketing']}
              color="text-green-400"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500">
        <p>© 2024 Nguyen Phuong Dong. Built with React & Tailwind.</p>
      </footer>

    </div>
  );
}

// Component con cho Project Card (để code đỡ dài)
const ProjectCard = ({ title, category, description, tags, color }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
  >
    <div className="h-48 bg-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Placeholder Image Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 transition-transform duration-500"></div>
      <Code size={40} className={`relative z-10 ${color} opacity-50`} />
    </div>
    <div className="p-6">
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{category}</div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-bcons-gold transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default App;