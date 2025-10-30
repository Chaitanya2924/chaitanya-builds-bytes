import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Mechanical Engineering',
      institution: 'Dehradun Institute of Technology',
      location: 'Dehradun, India',
      gpa: '7.48',
      period: 'Expected May 2026',
      current: true,
    },
    {
      degree: 'Polytechnic in Mechanical Engineering',
      institution: 'Amity University',
      location: 'India',
      gpa: '7.65',
      period: 'Completed May 2023',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey in mechanical engineering and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="card-hover border-border bg-card/80 backdrop-blur relative overflow-hidden"
            >
              {edu.current && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Current
                </div>
              )}
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="text-primary" size={32} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">GPA:</span>
                    <span className="text-primary font-bold text-lg">{edu.gpa}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
