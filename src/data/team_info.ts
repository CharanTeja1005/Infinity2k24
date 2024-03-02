import dummyPoster from "../assets/dummy-poster.jpg";

interface TeamInfo {
  id: number;
  poster: string;
  title: string;
  description: string;
  form_link?: string;
}

const team_info: TeamInfo[] = [
  {
    id: 1,
    poster: dummyPoster,
    title: "Sujeeth Reddy",
    description: "Convenor",
  },
  {
    id: 2,
    poster: dummyPoster,
    title: "Bhargav",
    description: "Treasurer",
  },
  {
    id: 3,
    poster: dummyPoster,
    title: "Sai Varshith",
    description: "Secretary",
  },
  {
    id: 4,
    poster: dummyPoster,
    title: "Spandana",
    description: "Joint Secretary",
  },
];

export default team_info;