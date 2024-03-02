import { FC } from "react";
// import Footer from "../components/Footer";
import BinarySeparator from "../components/BinarySeparator";
// import WaterDropGridEffect from "../components/WaterDropGridEffect";
import StarsCanvas from "../components/StarsCanvas";
// import { MouseTrailComponent } from "../components/MouseTrailComponent";
import Hero from "../components/Hero";
import AboutInfinity from "../components/AboutInfinity";
import GenAIComponent from "../components/GenAIComponent";
import OurTeamComponent from "../components/OurTeamComponent";
import SponsorsComponent from "../components/SponsorsComponent";
import DashDivider from "../components/DashDivider";
import GalleryComponent from "../components/GalleryComponent";
import EventsComponent from "../components/EventsComponent";

const Home: FC = () => {
  return (
    <div className="my-10 justify-items-center">
      <Hero />
      {/* <StarsCanvas /> */}

      <BinarySeparator />

      <AboutInfinity />

      <BinarySeparator />

      <GenAIComponent />

      <BinarySeparator />

      <EventsComponent/>

      <BinarySeparator />

      <OurTeamComponent />
      {/* <MouseTrailComponent/> */}
      <DashDivider />

      <SponsorsComponent />

      <DashDivider />

      <GalleryComponent />
      {/* <StaggeredAnimationComponent/> */}
      {/* <div className="shadow h-[50vh]"></div> */}
    </div>
  );
}

export default Home;