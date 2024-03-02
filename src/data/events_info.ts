import dummyPoster from "../assets/dummy-poster.jpg";

interface Event {
  id: number;
  poster: string;
  title: string;
  description: string;
  form_link: string;
}

const events: Event[] = [
  {
    id: 1,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
  },
  {
    id: 2,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
  },
  {
    id: 3,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
  },
  {
    id: 4,
    poster: dummyPoster,
    title: "event-title-1",
    description: "event description",
    form_link: "http-link",
  },
];

export default events;