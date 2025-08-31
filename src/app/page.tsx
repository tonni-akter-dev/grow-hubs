import Banner from "./home/components/Banner";
import EssentialTools from "./home/components/EssentialTools";
import GotoTorvert from "./home/components/GotoTorvert";
import SellMore from "./home/components/SellMore";
import Services from "./home/components/Services";
import TrustedBy from "./home/components/TrustedBy";
import TrustedSlider from "./home/components/TrustedSlider";

export default function Home() {
  return (
    <>
      <Banner />
      <TrustedBy />
      <Services />
      <SellMore />
      <EssentialTools />
      <GotoTorvert />
      {/* <TrustedSlider /> */}
    </>
  );
}
