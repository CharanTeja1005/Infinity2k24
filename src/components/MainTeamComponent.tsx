import { useState } from "react";
import Card from "./Card";
import { ReactTyped } from "react-typed";

interface TeamInfo {
  id: number;
  poster: string;
  title: string;
  description: string;
  form_link?: string;
}

interface MainTeamComponentProps {
  team_info: TeamInfo[];
}

const MainTeamComponent: React.FC<MainTeamComponentProps> = (props) => {
  const team_info: TeamInfo[] = props.team_info;

  const [showcard, setShowcard] = useState<boolean>(false);
  const [eventInfoCard, setEventInfoCard] = useState<TeamInfo | undefined>(
    team_info[0]
  );

  const cards = team_info.map((event: TeamInfo) => (
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
      <Card
        key={event.id}
        poster={event.poster}
        title={event.title}
        form_link={event.form_link}
        description=""
      />
    </div>
  ));

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 m-10">
      <div className="  flex flex-col justify-center items-center gap-5 overflow-auto">
        {cards}
      </div>
      <div
        className={`border border-white flex justify-center ${
          showcard ? "visible" : "hidden"
        } h-fit`}
      >
        {/* <CardSkeleton /> */}
        <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
          <img
            src="https://loremflickr.com/800/600/girl"
            className="shadow rounded-lg overflow-hidden border"
          />
          <div className="mt-8">
            <h4 className="font-bold text-xl">
              <ReactTyped
                startWhenVisible
                showCursor={false}
                typeSpeed={50}
                strings={[eventInfoCard?.title || ""]}
              />
            </h4>
            <p className="mt-2 text-gray-600">
              <ReactTyped
                startWhenVisible
                showCursor={false}
                typeSpeed={50}
                strings={[eventInfoCard?.description || ""]}
              />
            </p>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
              >
                form Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTeamComponent;