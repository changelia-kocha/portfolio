import PageLayout from "@/components/PageLayout";
import { ExternalLink, Clock, CheckCircle2 } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Democratic Accountability Project",
      status: "ongoing",
      period: "2022 - Present",
      description:
        "A multi-year research project examining how electoral institutions shape political accountability across democracies. This project uses innovative quantitative methods to analyze large-scale electoral data from over 50 countries.",
      objectives: [
        "Develop new measures of electoral accountability",
        "Analyze institutional variation across democracies",
        "Create open-access database of electoral outcomes",
      ],
      link: "#",
    },
    {
      title: "Political Representation in Comparative Perspective",
      status: "ongoing",
      period: "2021 - Present",
      description:
        "Investigating patterns of political representation across different institutional contexts. This research combines survey data, electoral results, and policy outcomes to understand representation dynamics.",
      objectives: [
        "Map representation gaps across countries",
        "Identify institutional correlates of responsive governance",
        "Examine the role of party systems in representation",
      ],
      link: "#",
    },
    {
      title: "Computational Methods for Political Science",
      status: "ongoing",
      period: "2020 - Present",
      description:
        "Developing new computational tools and methodological approaches for analyzing political phenomena. This includes work on text analysis, network analysis, and machine learning applications in political research.",
      objectives: [
        "Create open-source tools for political scientists",
        "Advance text-as-data methods",
        "Train next generation in computational methods",
      ],
      link: "#",
    },
    {
      title: "Electoral Behavior and Social Networks",
      status: "completed",
      period: "2019 - 2022",
      description:
        "Examined how social networks influence political behavior and electoral outcomes. This project combined social network analysis with traditional survey methods to understand peer effects in voting.",
      objectives: [
        "Map political discussion networks",
        "Measure peer influence on vote choice",
        "Publish findings in top journals",
      ],
      link: "#",
    },
  ];

  return (
    <PageLayout 
      title="Research Projects" 
      subtitle="Current and completed research initiatives"
    >
      <div className="space-y-10 fade-in">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="group p-8 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-academic-coral transition-colors">
                    {project.title}
                  </h3>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-academic-light-gray hover:text-academic-coral transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-academic-gray">
                    {project.status === "ongoing" ? (
                      <>
                        <Clock className="w-4 h-4 text-academic-coral" />
                        Ongoing
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Completed
                      </>
                    )}
                  </span>
                  <span className="text-academic-light-gray">{project.period}</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed text-foreground mb-6">
              {project.description}
            </p>
            
            <div>
              <h4 className="text-sm font-medium text-academic-gray uppercase tracking-wide mb-3">
                Key Objectives
              </h4>
              <ul className="space-y-2">
                {project.objectives.map((objective, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-academic-coral mt-1">•</span>
                    <span className="text-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;
