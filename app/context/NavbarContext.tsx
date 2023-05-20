"use client";
import { type ReactNode, createContext, useState } from "react";

type NavbarContextType = {
  isSidebarOpen: boolean;
  openSidebarAction: () => void;
  closeSidebarAction: () => void;
};

export const NavbarContext = createContext<NavbarContextType>({
  isSidebarOpen: false,
  openSidebarAction: () => {},
  closeSidebarAction: () => {},
});

type NavbarContextProviderType = {
  children: ReactNode;
};

const NavbarContextProvider = ({ children }: NavbarContextProviderType) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebarAction = () => setIsSidebarOpen(true);
  const closeSidebarAction = () => setIsSidebarOpen(false);

  return (
    <NavbarContext.Provider
      value={{ isSidebarOpen, openSidebarAction, closeSidebarAction }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarContextProvider;
