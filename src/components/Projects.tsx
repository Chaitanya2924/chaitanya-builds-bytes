import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import robotImg from '@/assets/project-robot.jpg';
import bridgeImg from '@/assets/project-bridge.jpg';
import writingImg from '@/assets/project-writing.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Autonomous Maze-Solving Robot',
      subtitle: 'Micromouse Event',
      description:
        'Developed an autonomous maze-solving robot using STM32 microcontroller and proximity sensors. Focused on embedded systems, sensor integration, and path optimization algorithms.',
      technologies: ['STM32', 'Embedded Systems', 'Sensors', 'Robotics'],
      image: robotImg,
    },
    {
      title: 'Automatic Bridge System',
      subtitle: 'Pneumatics and Sensors',
      description:
        'Designed a smart bridge system that opens and closes based on boat detection using sensors and pneumatic actuation. Integrates automation with mechanical systems.',
      technologies: ['Pneumatics', 'Sensors', 'Automation', 'CAD'],
      image: bridgeImg,
    },
    {
      title: 'Writing Machine',
      subtitle: 'National Children\'s Science Congress 2019',
      description:
        'Created a writing machine using Arduino Uno and stepper motors to replicate handwriting motion. Won District Child Scientist award for this innovation.',
      technologies: ['Arduino', 'Stepper Motors', 'Automation', 'Mechanics'],
      image: writingImg,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining robotics, automation, and engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group card-hover border-border bg-card/80 backdrop-blur overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ExternalLink className="text-primary group-hover:text-primary-foreground" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
