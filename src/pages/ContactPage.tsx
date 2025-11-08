import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, GraduationCap, BookOpen, Twitter, Linkedin } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@institution.edu",
      href: "mailto:your.email@institution.edu",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "[Building Name], Room [Number]\n[Department]\n[Institution]\n[City, State ZIP]",
      href: null,
    },
  ];

  const academicProfiles = [
    {
      icon: GraduationCap,
      label: "Google Scholar",
      value: "View publications and citations",
      href: "https://scholar.google.com/",
    },
    {
      icon: BookOpen,
      label: "ORCID",
      value: "0000-0000-0000-0000",
      href: "https://orcid.org/",
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      value: "@yourusername",
      href: "https://twitter.com/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View professional profile",
      href: "https://linkedin.com/",
    },
  ];

  const officeHours = {
    title: "Office Hours",
    schedule: [
      { day: "Monday", time: "2:00 PM - 4:00 PM" },
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
      { day: "Friday", time: "By appointment" },
    ],
    note: "Please email to schedule an appointment outside of regular office hours.",
  };

  return (
    <PageLayout 
      title="Contact" 
      subtitle="Get in touch for research collaborations and inquiries"
    >
      <div className="space-y-16 fade-in">
        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-academic-coral flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-academic-gray uppercase tracking-wide mb-2">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-academic-coral transition-colors text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-lg whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Academic Profiles */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Academic Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicProfiles.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-academic-coral flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-academic-coral transition-colors mb-1">
                        {item.label}
                      </h3>
                      <p className="text-academic-gray">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Social Links */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border border-academic-border rounded-lg hover:border-academic-coral hover:shadow-lg transition-all duration-300 bg-card"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-academic-coral flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-academic-coral transition-colors mb-1">
                        {item.label}
                      </h3>
                      <p className="text-academic-gray">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Office Hours */}
        <section>
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8 pb-3 border-b border-academic-border">
            {officeHours.title}
          </h2>
          <div className="p-8 border border-academic-border rounded-lg bg-card">
            <div className="space-y-4 mb-6">
              {officeHours.schedule.map((slot, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{slot.day}</span>
                  <span className="text-academic-gray">{slot.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-academic-light-gray italic border-t border-academic-border pt-4">
              {officeHours.note}
            </p>
          </div>
        </section>

        {/* Contact Note */}
        <section className="p-8 border border-academic-border rounded-lg bg-muted/30">
          <p className="text-lg leading-relaxed text-foreground text-center">
            I welcome inquiries about research collaborations, speaking opportunities, 
            and potential graduate student supervision. Please feel free to reach out 
            via email with any questions about my work.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default ContactPage;
