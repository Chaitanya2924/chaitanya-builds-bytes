import { ArrowRight, Github, Linkedin, Mail, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Network Pattern Background */}
      <div className="absolute inset-0 z-0 network-bg"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-widest uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Chaitanya <br />
                <span className="text-gradient">Chaudhary</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Mechanical Engineer | Robotics & AI Enthusiast | Future Innovator
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about designing intelligent systems that bridge mechanics,
              automation, and artificial intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg" className="group">
                  Explore My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/Chaitanya2924"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/chaitanya-chaudhary-aa7b53307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chaitanyachaudhary94@gmail.com"
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Animated Gears with Network Pattern */}
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-md mx-auto h-96 flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute w-64 h-64 bg-foreground/5 rounded-full blur-3xl"></div>
              
              {/* Large Gear */}
              <div className="absolute">
                <Settings size={200} className="text-foreground opacity-15 gear-animation" strokeWidth={0.5} />
              </div>
              
              {/* Medium Gear - Top Right */}
              <div className="absolute top-8 right-12">
                <Settings size={120} className="text-foreground opacity-20 gear-animation-reverse" strokeWidth={0.5} />
              </div>
              
              {/* Small Gear - Bottom Left */}
              <div className="absolute bottom-12 left-8">
                <Settings size={80} className="text-foreground opacity-18 gear-animation" strokeWidth={0.5} />
              </div>
              
              {/* Tiny Gear - Top Left */}
              <div className="absolute top-20 left-20">
                <Settings size={60} className="text-foreground opacity-15 gear-animation-reverse" strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
