import AboutServer from "@/components/about/About";
import HeroServer from "@/components/hero/HeroServer";
import ProjectsClient from "@/components/projects/ProjectsClient";
import ServicesServer from "@/components/services/ServicesServer";

export default function Home() {
  return (
    <div className={""}>
      <HeroServer />
      <AboutServer />
      <ServicesServer />
      <ProjectsClient />
    </div>
  );
}
