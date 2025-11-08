import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const PageLayout = ({ children, title, subtitle }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {title && (
            <div className="mb-16 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-academic-gray">
                  {subtitle}
                </p>
              )}
              <div className="w-24 h-0.5 bg-academic-coral mt-8"></div>
            </div>
          )}
          {children}
        </div>
      </main>
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

export default PageLayout;
