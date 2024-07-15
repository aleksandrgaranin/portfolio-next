'use client'
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import { StateContext, useStateContext } from "@/context/StateContext";
import { navItems } from "@/data";



export default function Home() {


  return (
    <StateContext>
      <main className="relative bg-black-100 flex justify-center items-center flex-col 
     mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Footer />
        </div>
      </main>

    </StateContext>
  );
}
