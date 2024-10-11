import AboutServer from "@/components/about/About";
import ContactClient from "@/components/contact/ContactClient";
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

      <ContactClient />
    </div>
  );
}
