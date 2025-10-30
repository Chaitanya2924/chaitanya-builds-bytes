import { Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To design intelligent systems that revolutionize how machines interact with the world.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining mechanical engineering with AI to create cutting-edge automation solutions.',
    },
    {
      icon: Rocket,
      title: 'Future Goal',
      description: "Master's in Robotics and Cognitive Systems to push the boundaries of intelligent automation.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineering student passionate about robotics, AI, and intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm <span className="text-primary font-semibold">Chaitanya Chaudhary</span>, a Mechanical 
              Engineering student at DIT University, Dehradun (Batch 2026), passionate about the intersection 
              of mechanics, intelligence, and automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My interests lie in <span className="text-primary font-semibold">robotics</span>, 
              <span className="text-primary font-semibold"> artificial intelligence</span>, and 
              <span className="text-primary font-semibold"> machine learning</span>, where I aim to design 
              intelligent systems that can think, learn, and interact with the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working on projects that challenge me to combine engineering principles with emerging 
              technologies, creating innovative solutions that bridge the gap between theory and real-world application.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Looking ahead, I plan to pursue a <span className="text-primary font-semibold">Master's in Robotics 
              and Cognitive Systems</span>, where I can deepen my knowledge and contribute to the future of 
              intelligent automation.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="card-hover border-border bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
