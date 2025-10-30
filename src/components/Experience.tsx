import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experience = {
    company: 'Reva Engineering Enterprises',
    role: 'Engineering Intern',
    periods: ['Aug 2022 – Oct 2022', 'Feb 2023 – Apr 2023'],
    responsibilities: [
      'Drafted and revised engineering drawings using PTC Creo and AutoCAD',
      'Assisted in quality analysis and inspection of manufactured components',
      'Learned manufacturing standards and component analysis procedures',
      'Collaborated with senior engineers on product design improvements',
    ],
  };

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on industry experience in engineering and design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover border-border bg-card/80 backdrop-blur">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={40} />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl font-bold">{experience.role}</h3>
                  <p className="text-xl text-primary font-semibold">{experience.company}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    {experience.periods.map((period, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4 pl-[104px]">
                <h4 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
                  Key Responsibilities
                </h4>
                <div className="space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-lg text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
