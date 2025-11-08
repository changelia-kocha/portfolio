import PageLayout from "@/components/PageLayout";
import { ExternalLink } from "lucide-react";

const PublicationsPage = () => {
  const publications = [
    {
      title: "Electoral Accountability and Democratic Representation",
      authors: "X X and Jane Doe",
      venue: "American Political Science Review",
      year: "2024",
      link: "#",
      abstract: "This paper examines the relationship between electoral institutions and democratic accountability across multiple countries. Using novel data and advanced statistical methods, we demonstrate how institutional design shapes voter behavior and representative responsiveness.",
    },
    {
      title: "Quantitative Methods in Comparative Politics: A New Framework",
      authors: "X X, John Smith, and Jane Doe",
      venue: "Journal of Politics",
      year: "2023",
      link: "#",
      abstract: "We propose a new methodological framework for analyzing comparative political data. This approach addresses common challenges in cross-national research and provides more robust estimates of causal effects.",
    },
    {
      title: "Political Institutions and Policy Outcomes",
      authors: "X X",
      venue: "Political Analysis",
      year: "2023",
      link: "#",
      abstract: "This study investigates how institutional arrangements affect policy outcomes in democratic systems. The findings reveal significant variation in policy responsiveness based on electoral rules and legislative structures.",
    },
    {
      title: "Data-Driven Approaches to Electoral Studies",
      authors: "X X and Collaborators",
      venue: "Annual Review of Political Science",
      year: "2022",
      link: "#",
      abstract: "A comprehensive review of computational and data-intensive methods in electoral research. We discuss recent advances and future directions for the field.",
    },
    {
      title: "Voter Turnout and Electoral Competition",
      authors: "X X",
      venue: "Comparative Political Studies",
      year: "2021",
      link: "#",
      abstract: "Analyzing patterns of voter turnout across competitive and non-competitive electoral contexts, this paper provides insights into the motivations behind political participation.",
    },
  ];

  return (
    <PageLayout 
      title="Publications" 
      subtitle="Peer-reviewed articles and research outputs"
    >
      <div className="space-y-12 fade-in">
        {publications.map((pub, index) => (
          <article 
            key={index} 
            className="group p-8 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-academic-coral transition-colors flex-1">
                {pub.title}
              </h3>
              {pub.link !== "#" && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-academic-light-gray hover:text-academic-coral transition-colors flex-shrink-0"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-academic-gray mb-2">{pub.authors}</p>
            <p className="text-academic-light-gray italic mb-4">
              {pub.venue}, {pub.year}
            </p>
            <p className="text-foreground leading-relaxed">
              {pub.abstract}
            </p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
};

export default PublicationsPage;
