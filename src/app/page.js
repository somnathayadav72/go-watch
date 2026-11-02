import GlobalTimeRail from "@/components/global/GlobalTimeRail";
import Navbar from "@/components/navigation/Navbar";
import ZeroHourHero from "@/components/hero/ZeroHourHero";
import BrandStatement from "@/components/sections/BrandStatement";
import CollectionGateway from "@/components/collections/CollectionGateway";
import CrownWinder, { ExplodedCalibre } from "@/components/mechanism/CrownWinder";
import HourShowroom from "@/components/showroom/HourShowroom";
import { AetherRoom, VantaRoom, TidalRoom, VectorRoom, AltusRoom, LumaRoom } from "@/components/collections/CollectionRooms";
import WatchCatalogue from "@/components/catalogue/WatchCatalogue";
import { MaterialOfTime } from "@/components/craft/CraftSections";
import CasebackFlip from "@/components/craft/CasebackFlip";
import StrapLab from "@/components/craft/StrapLab";
import CampaignEditorial from "@/components/editorial/CampaignEditorial";
import BigReveal from "@/components/sections/BigReveal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <GlobalTimeRail />
      <Navbar />
      <main>
        <ZeroHourHero />
        <BrandStatement />
        <CollectionGateway />
        <CrownWinder />
        <ExplodedCalibre />
        <HourShowroom />
        <AetherRoom />
        <VantaRoom />
        <TidalRoom />
        <VectorRoom />
        <AltusRoom />
        <LumaRoom />
        <WatchCatalogue />
        <MaterialOfTime />
        <CasebackFlip />
        <StrapLab />
        <CampaignEditorial />
        <BigReveal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
