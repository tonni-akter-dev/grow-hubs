import Banner from "./home/components/Banner";
// import CosellHeroCalculator from "./home/components/HeroCalculator";
import SellMore from "./home/components/SellMore";
import Services from "./home/components/Services";
import TrustedBy from "./home/components/TrustedBy";

export default function Home() {
  return (
    <>
      <Banner />
      {/* <CosellHeroCalculator/> */}
      <TrustedBy />
      <Services />
      <SellMore />
    </>
  );
}
