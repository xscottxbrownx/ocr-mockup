// Component Imports
import AboutBlurb from "../components/AboutBlurb";
import CallToAction from "../components/CallToAction";
import CallToAction2 from "../components/CallToAction2";
import Hero from "../components/Hero";
import LOCATIONS from "../constants/LocationsList";
import UpcomingEvents from "../components/UpcomingEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <CallToAction />
      <AboutBlurb />
      <CallToAction2 />
      {LOCATIONS.length && <UpcomingEvents />}
    </>
  );
}
