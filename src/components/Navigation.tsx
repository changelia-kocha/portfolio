import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Kocha Changelia" },
    { path: "/cv", label: "CV" },
    { path: "/publications", label: "Publications" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-academic-border shadow-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-serif font-semibold text-academic-coral hover:opacity-80 transition-opacity"
          >
            {navItems[0].label}
          </Link>
          <div className="flex gap-8">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors hover:text-academic-coral relative ${
                  location.pathname === item.path 
                    ? "text-academic-coral font-medium after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-0.5 after:bg-academic-coral" 
                    : "text-academic-gray"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
