import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  Home,
  BookOpen,
  Star,
  Briefcase,
  Info,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type SimpleLink = {
  label: string;
  to: string;
  icon?: React.ReactNode;
};

type DropdownLink = {
  label: string;
  to: string;
  dropdown: SimpleLink[];
  icon: React.ReactNode;
};

type LinkItem = SimpleLink | DropdownLink;

const links: LinkItem[] = [
  {
    to: "/",
    label: "Home",
    icon: (
      <Home className="w-4 h-4 inline mr-2" stroke="var(--color-icon-gray)" />
    ),
  },
  {
    to: "/courses",
    label: "Courses",
    icon: (
      <BookOpen
        className="w-4 h-4 inline mr-2"
        stroke="var(--color-icon-gray)"
      />
    ),
    dropdown: [
      { to: "/courses/data-science-ai/", label: "Data Science & AI Program" },
      {
        to: "/courses/cyber-security/",
        label: "Cyber Security & Ethical Hacking",
      },
      {
        to: "/courses/devops-and-cloud-computing-program/",
        label: "DevOps and Cloud Computing Program",
      },
    ],
  },
  {
    to: "/reviews",
    label: "Reviews",
    icon: (
      <Star className="w-4 h-4 inline mr-2" stroke="var(--color-icon-gray)" />
    ),
  },
  {
    to: "/about",
    label: "Jobs",
    icon: (
      <Briefcase
        className="w-4 h-4 inline mr-2"
        stroke="var(--color-icon-gray)"
      />
    ),
  },
  {
    to: "/contact",
    label: "About Us",
    icon: (
      <Info className="w-4 h-4 inline mr-2" stroke="var(--color-icon-gray)" />
    ),
  },
  {
    to: "/more",
    label: "More",
    icon: (
      <MoreHorizontal
        className="w-4 h-4 inline mr-2"
        stroke="var(--color-icon-gray)"
      />
    ),
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = "auto";
      } else if (menuOpen) {
        document.body.style.overflow = "hidden";
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }
  }, [menuOpen]);

  // Toggle mobile dropdown open/close for a specific label
  const toggleMobileDropdown = (label: string) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      className="sticky top-0 z-50 shadow"
      style={{ backgroundColor: "var(--color-binance-gray)" }}
      // className="shadow"
    >
      <div className="w-full h-20 px-4 flex items-center justify-between relative">
        <Link
          to="/"
          className="text-2xl font-bold text-[var(--color-binance-yellow)]"
        >
          Soft Skills
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-[var(--color-binance-light)] ml-auto z-[10001]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu with Radix dropdown */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-10">
            {links.map((link) =>
              "dropdown" in link ? (
                <NavigationMenuItem key={link.label} className="relative">
                  <NavigationMenuTrigger
                    className="flex items-center gap-1 text-[var(--color-binance-light)] hover:text-[var(--color-binance-yellow)] group"
                    aria-haspopup="menu"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 group-data-[state=open]:hidden" />
                    <ChevronUp className="w-4 h-4 hidden group-data-[state=open]:inline" />
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="absolute top-full left-0 mt-2 bg-[var(--color-binance-gray)] shadow-md rounded-md py-2 min-w-[200px] z-50 flex flex-col">
                    {link.dropdown.map((item) => (
                      <NavigationMenuLink asChild key={item.to}>
                        <Link
                          to={item.to}
                          className="px-4 py-2 text-[var(--color-binance-light)] hover:bg-[var(--color-binance-yellow)] hover:text-[var(--color-binance-dark)] rounded"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.to || "#"}
                      className="text-[var(--color-binance-light)] hover:text-[var(--color-binance-yellow)]"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile drawer */}
        <div
          className={clsx(
            "fixed top-0 left-0 h-full w-84 bg-[var(--color-binance-gray)] p-6 z-[10000] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden",
            {
              "translate-x-0": menuOpen,
              "-translate-x-full": !menuOpen,
            }
          )}
        >
          <div className="flex flex-col space-y-2">
            {links.map((link) =>
              "dropdown" in link ? (
                <div key={link.label}>
                  <button
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="w-full flex items-center justify-between text-[var(--color-binance-light)] hover:text-[var(--color-binance-yellow)] px-2 py-2 focus:outline-none"
                  >
                    <div>
                      {link?.icon}
                      {link.label}
                    </div>

                    {mobileDropdownOpen[link.label] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {mobileDropdownOpen[link.label] && (
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setMenuOpen(false)}
                          className="text-[var(--color-binance-light)] hover:text-[var(--color-binance-yellow)] px-2 py-5 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-[var(--color-binance-light)] hover:text-[var(--color-binance-yellow)] px-2 py-5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Overlay when drawer is open */}
        {menuOpen && (
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 bg-black opacity-50 z-[9999] md:hidden"
            onClick={() => setMenuOpen(false)}
            style={{ cursor: "pointer" }}
            tabIndex={0}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
