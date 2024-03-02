import React, { useState } from "react";
import Card from "./Card";
import { ReactTyped } from "react-typed";
import dummyPoster from '../assets/dummy-poster.jpg'
import ThreeDCardComponent from "./ThreeDCardComponent";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

interface EventInfo {
  id: number;
  poster: string;
  title: string;
  form_link: string;
  description: string;
}

interface MainEventComponentProps {
  events_info: EventInfo[];
}

const MainEventComponent: React.FC<MainEventComponentProps> = (props) => {
  const event_info: EventInfo[] = props.events_info;

  const [showcard, setShowcard] = useState<boolean>(false);
  const [eventInfoCard, setEventInfoCard] = useState<EventInfo | undefined>(
    event_info[0]
  );

  const cards = event_info.map((event: EventInfo) => {

    return (
      <div
        onClick={() => {
            if (event.id === eventInfoCard?.id && showcard) {
                setShowcard(false);
              } else {
                  setEventInfoCard(event);
                  setShowcard(true);
                  window.scrollTo(0, 0);
                }
              }}
            >
      <ThreeDCardComponent title={event.title} poster={event.poster}  />
          </div>
          )
          {/* <Card
          // type=""
        // key={event.id}
        poster={event.poster}
        title={event.title}
        description=""
        form_link={event.form_link}
      /> */}
    }
      );

  return (
    <div className="flex  flex-col-reverse md:grid md:grid-cols-2 m-10">
      <div className="  flex flex-col justify-center items-center gap-5">
        {cards}
      </div>
      <div
        className={`flex justify-center ${
          showcard ? "visible" : "hidden"
        } h-fit`}
      >
       <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {eventInfoCard?.title}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={eventInfoCard?.poster}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          {eventInfoCard?.description}
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Form Link →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      </div>
    </div>
  );
};

export default MainEventComponent;