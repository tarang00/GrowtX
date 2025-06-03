
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Add iOS-specific meta tags for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no');
    }
    
    // iOS status bar styling - for when site is added to home screen
    const metaStatusBar = document.createElement('meta');
    metaStatusBar.name = 'apple-mobile-web-app-status-bar-style';
    metaStatusBar.content = 'black-translucent';
    document.head.appendChild(metaStatusBar);
    
    // iOS web app capable
    const metaWebApp = document.createElement('meta');
    metaWebApp.name = 'apple-mobile-web-app-capable';
    metaWebApp.content = 'yes';
    document.head.appendChild(metaWebApp);
    
    // iOS app title
    const metaTitle = document.createElement('meta');
    metaTitle.name = 'apple-mobile-web-app-title';
    metaTitle.content = 'GrowtX';
    document.head.appendChild(metaTitle);
    
    return () => {
      document.head.removeChild(metaStatusBar);
      document.head.removeChild(metaWebApp);
      document.head.removeChild(metaTitle);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="overflow-hidden">{children}</main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;
