import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Mail } from "lucide-react";

const Index = () => {
  const quickLinks = [
    { icon: GraduationCap, label: "View CV", path: "/cv", description: "Education and experience" },
    { icon: BookOpen, label: "Publications", path: "/publications", description: "Research articles and papers" },
    { icon: Briefcase, label: "Projects", path: "/projects", description: "Ongoing research work" },
    { icon: Mail, label: "Get in Touch", path: "/contact", description: "Contact information" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-4xl fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-academic-coral mb-8 leading-tight">
            Kocha Changelia
          </h1>
          <p className="text-2xl md:text-3xl text-academic-gray mb-4">
            Political Science
          </p>
          <p className="text-xl md:text-2xl text-academic-light-gray mb-12">
            [Your Institution]
          </p>
          <div className="w-32 h-px bg-academic-coral mx-auto my-12"></div>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground max-w-3xl mx-auto">
            Researcher in Political Science and Data Analysis
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            About
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground">
              Welcome! My research explores questions regarding political institutions, electoral behavior, 
              and quantitative methods in political science. I work at the intersection of comparative politics 
              and data science, with a particular focus on democratic accountability and political representation.
            </p>
            <p className="text-foreground">
              My work has been published in leading political science journals including the{" "}
              <span className="italic">American Political Science Review</span>,{" "}
              <span className="italic">Journal of Politics</span>, and{" "}
              <span className="italic">Political Analysis</span>, among others.
            </p>
            <p className="text-foreground">
              I hold a Ph.D. in Political Science from [Your University] and currently work as 
              [Your Position] at [Your Institution].
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-in">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  to={link.path}
                  className="group p-8 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-academic-coral" />
                    <ArrowRight className="w-5 h-5 text-academic-light-gray group-hover:text-academic-coral group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-academic-coral transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-academic-gray">
                    {link.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-academic-border bg-muted/30">
        <div className="container mx-auto max-w-5xl px-6 py-8">
          <p className="text-sm text-academic-light-gray text-center">
            © {new Date().getFullYear()} Kocha Changelia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
