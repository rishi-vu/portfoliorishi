import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 section-padding gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-secondary-500 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-900">
                Rishikesh <span className="gradient-text">Bhushal</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-700 font-medium">
                Data Analyst & AI Developer
              </h2>
            </div>
            
            <p className="text-primary-600 text-lg leading-relaxed">
              I'm a passionate developer specializing in data analysis and agentic AI systems.
              I love extracting insights from complex datasets and building intelligent automation
              solutions that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="border border-secondary-400 text-secondary-400 px-8 py-3 rounded-lg font-medium hover:border-secondary-300 hover:bg-secondary-400/10 transition-all duration-300">
                View My Work
              </button>
              <button className="border border-accent-400 text-accent-400 px-8 py-3 rounded-lg font-medium hover:border-accent-300 hover:bg-accent-400/10 transition-all duration-300">
                Get In Touch
              </button>
              <a
                href="/resume.pdf"
                download
                className="border border-primary-400 text-primary-400 px-8 py-3 rounded-lg font-medium hover:border-primary-300 hover:bg-primary-400/10 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-primary-500/20"
                aria-label="Download Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full flex items-center justify-center shadow-2xl glow-effect">
                <div className="w-72 h-72 bg-dark-200 rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce shadow-lg glow-effect"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full animate-bounce shadow-lg glow-effect" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
