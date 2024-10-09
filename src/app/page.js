import AboutServer from "@/components/about/About";
import HeroServer from "@/components/hero/HeroServer";
import ServicesServer from "@/components/services/ServicesServer";

export default function Home() {
  return (
    <div className={""}>
      <HeroServer />
      <AboutServer />
      <ServicesServer />
    </div>
  );
}
