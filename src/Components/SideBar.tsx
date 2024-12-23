import {
    ArrowRightOnRectangleIcon,
    Bars4Icon,
    BookOpenIcon,
    ChevronDownIcon,
    CloudIcon,
    CodeBracketIcon,
    Cog6ToothIcon,
    HomeIcon,
    PhoneIcon,
  } from "@heroicons/react/24/outline";
  import { useEffect, useRef, useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  interface NavLinkProps {
    icon: React.ReactNode;
    label: string;
    path?: string;
    onClick?: () => void;
  }
  
  const NavLink: React.FC<NavLinkProps> = ({ icon, label, path, onClick }) => (
    <a
      href={path || "#"}
      onClick={onClick}
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100"
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="ml-3 font-light">{label}</span>
    </a>
  );
  
  const SideBar: React.FC = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileRef = useRef(false);
    const navigate = useNavigate();
  
    const handleNavigation = (path: string) => {
      navigate(path);
    };
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        const isMobileLocal = width < 768;
        setIsMobile(isMobileLocal);
        isMobileRef.current = isMobileLocal;
      };
  
      handleResize();
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div className="flex flex-col w-full md:w-64 bg-white md:h-screen border-r relative">
        {/* Header */}
        <div className="flex justify-between md:justify-around w-full px-4 items-center">
          <div className="flex items-center justify-center gap-4 h-16">
            <img src="/svg/logo.svg" alt="logo" className="w-6" />
            <h1 className="text-lg font-semibold">CodeAnt AI</h1>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsSideBarVisible((prevState) => !prevState)}
            >
              <Bars4Icon className="w-5" />
            </button>
          </div>
        </div>
  
        {/* Sidebar Navigation */}
        <div
          className={`absolute md:static bottom-0 w-full h-screen md:h-full bg-black/10 transition-all ${
            isMobile ? (isSideBarVisible ? "translate-y-0" : "translate-y-full") : ""
          }`}
          style={{
            height: isMobile
              ? isSideBarVisible
                ? "calc(100vh - 64px)"
                : "0px"
              : "100%",
          }}
        >
          <div className="bg-white w-full h-fit md:h-full flex flex-col">
            {/* User Info */}
            <div className="flex flex-col items-center py-4">
              <span className="mt-2 text-sm border p-2 rounded-xl flex gap-2 items-center">
                <span>UtkarshDhairyaPanwar...</span>
                <ChevronDownIcon className="w-5" />
              </span>
            </div>
  
            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-2 space-y-2">
              <NavLink
                icon={<HomeIcon className="w-6" />}
                label="Repositories"
                
              />
              <NavLink
                icon={<CodeBracketIcon className="w-6" />}
                label="AI Code Review"
                
              />
              <NavLink
                icon={<CloudIcon className="w-6" />}
                label="Cloud Security"
                
              />
              <NavLink
                icon={<BookOpenIcon className="w-6" />}
                label="How to Use"
                
              />
              <NavLink
                icon={<Cog6ToothIcon className="w-6" />}
                label="Settings"
                
              />
            </nav>
  
            {/* Footer Links */}
            <div className="px-4 py-4">
              <NavLink
                icon={<PhoneIcon className="w-5" />}
                label="Support"
               
              />
              <NavLink
                icon={<ArrowRightOnRectangleIcon className="w-5" />}
                label="Logout"
                onClick={() => handleNavigation("/")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar;
  