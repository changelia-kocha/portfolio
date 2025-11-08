import PageLayout from "@/components/PageLayout";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const education = [
    {
      degree: "Ph.D. in Political Science",
      institution: "[Your University]",
      year: "2018",
      details: "Dissertation: Electoral Accountability and Democratic Representation",
    },
    {
      degree: "M.A. in Political Science",
      institution: "[Your University]",
      year: "2014",
    },
    {
      degree: "B.A. in Political Science",
      institution: "[Your University]",
      year: "2012",
      details: "Magna Cum Laude",
    },
  ];

  const positions = [
    {
      title: "[Your Current Position]",
      institution: "[Your Institution]",
      period: "2020 - Present",
    },
    {
      title: "Assistant Professor",
      institution: "[Previous Institution]",
      period: "2018 - 2020",
    },
    {
      title: "Postdoctoral Fellow",
      institution: "[Institution]",
      period: "2017 - 2018",
    },
  ];

  const awards = [
    {
      title: "Excellence in Research Award",
      organization: "[Organization]",
      year: "2023",
    },
    {
      title: "Best Paper Award",
      organization: "Annual Political Science Conference",
      year: "2022",
    },
    {
      title: "Graduate Research Fellowship",
      organization: "[Foundation]",
      year: "2015 - 2017",
    },
  ];

  return (
    <PageLayout 
      title="Curriculum Vitae" 
      subtitle="Academic background and professional experience"
    >
      <div className="space-y-16 fade-in">
        {/* Download Button */}
        <div className="flex justify-end">
          <Button variant="outline" className="gap-2 hover:bg-academic-coral/10 hover:text-academic-coral hover:border-academic-coral transition-colors">
            <Download className="w-4 h-4" />
            Download CV (PDF)
          </Button>
        </div>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-academic-coral transition-colors">
                    {item.degree}
                  </h3>
                  <span className="text-academic-gray font-medium">{item.year}</span>
                </div>
                <p className="text-academic-gray mb-1">{item.institution}</p>
                {item.details && (
                  <p className="text-academic-light-gray italic">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Academic Positions */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Academic Positions
          </h2>
          <div className="space-y-8">
            {positions.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-academic-coral transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-academic-gray font-medium">{item.period}</span>
                </div>
                <p className="text-academic-gray">{item.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Honors & Awards
          </h2>
          <div className="space-y-6">
            {awards.map((item, index) => (
              <div key={index} className="group">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-academic-coral transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-academic-gray font-medium">{item.year}</span>
                </div>
                <p className="text-academic-gray">{item.organization}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Interests */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Research Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Political Institutions",
              "Electoral Behavior",
              "Democratic Accountability",
              "Quantitative Methods",
              "Comparative Politics",
              "Political Representation",
            ].map((interest, index) => (
              <div
                key={index}
                className="p-4 border border-academic-border rounded-lg hover:border-academic-coral hover:bg-muted/50 transition-all"
              >
                <p className="text-foreground">{interest}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CV;
