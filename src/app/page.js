import AboutServer from "@/components/about/About";
import HeroServer from "@/components/hero/HeroServer";

export default function Home() {
  return (
    <div className={""}>
      <HeroServer />
      <AboutServer />
    </div>
  );
}
