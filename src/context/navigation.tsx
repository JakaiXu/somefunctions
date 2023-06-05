import React, { useEffect, useState } from "react";
import { createContext } from "react";
type ContextType = {
  currentPath: string;
  navigate: (to: string) => void;
};
type Children = {
  children: React.ReactNode;
};
const NavigationContext = createContext<ContextType>({
    currentPath:'',
    navigate:() => {}
});

const Provider = ({ children }: Children) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>

      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
export { Provider };
