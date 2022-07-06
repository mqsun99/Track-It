import { IoBarChartSharp } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { MdPersonSearch } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "stats",
    path: "/",
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "all jobs",
    path: "all-jobs",
    icon: <FaRegListAlt />,
  },
  {
    id: 3,
    text: "add job",
    path: "add-job",
    icon: <MdPostAdd />,
  },
  {
    id: 4,
    text: "profile",
    path: "profile",
    icon: <MdPersonSearch />,
  },
];

export default links;
