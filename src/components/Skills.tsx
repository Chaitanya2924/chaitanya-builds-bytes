import { Code2, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    'PTC Creo',
    'AutoCAD',
    'Fusion 360',
    '3D Modeling',
    'Product Design',
    'Prototyping',
    'CAD Drafting',
  ];

  const softSkills = [
    'Problem-Solving',
    'Communication',
    'Time Management',
    'Adaptability',
    'Critical Thinking',
    'Team Collaboration',
  ];

  const certifications = [
    {
      title: 'PTC Creo Parametric',
      issuer: 'Udemy',
      date: 'June 2025',
    },
    {
      title: '3D Printing',
      issuer: 'VerveGen Tech Pvt. Ltd. & DIT University',
      date: 'November 2024',
    },
    {
      title: 'District Child Scientist',
      issuer: 'National Children\'s Science Congress',
      date: '2019',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="card-hover border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="card-hover border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="card-hover border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-1">
                    <p className="font-semibold text-foreground">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-primary">{cert.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
