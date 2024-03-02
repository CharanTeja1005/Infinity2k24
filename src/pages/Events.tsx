import { FC } from 'react';
import SuryaSpecailComponent from "../components/MainEventComponent";
import events_info from "../data/events_info";
import TracingBeam from '../components/ui/TracingBeam';
import ThreeDCardComponent from '../components/ThreeDCardComponent';

const Events: FC = () => {
  return (
    <TracingBeam>
      {/* <ThreeDCardComponent /> */}
      <SuryaSpecailComponent events_info={events_info}/>
    </TracingBeam>
  );
}

export default Events;