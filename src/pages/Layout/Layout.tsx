import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";
import { cases } from "../../data";

function Layout() {
  const [visibleCount,setVisibleCount] =useState(()=>{
    const savedCard = localStorage.getItem("visibleCount");
    return savedCard ? Number(savedCard):2;
  });

  useEffect(()=>{
     localStorage.setItem("visibleCount",String(visibleCount))
  },[visibleCount])
  const handleNewCase = ()=>{
    setVisibleCount( (prev) => prev + 1
     );
    
  };

  const visibleCases = cases.slice(0,visibleCount)

  return (
    <div className="min-h-screen bg-background">
      <Header onNewCase={handleNewCase} />

      <main
        className="flex-grow w-full max-w-container-max md:max-w-7xl
        mx-auto px-margin-mobile md:px-margin-desktop py-12
        flex flex-col gap-16 relative z-10"
      >
        <Outlet context={{ visibleCases }} />
      </main>
    </div>
  );
}

export default Layout;