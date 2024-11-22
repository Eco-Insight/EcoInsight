// types
import { TeamMember } from "./types";

// images
import img1 from "../../assets/images/avatars/img-1.jpg";
import img2 from "../../assets/images/avatars/img-2.jpg";
import img3 from "../../assets/images/avatars/img-3.jpg";

const teamMembers: TeamMember[] = [
  {
    avatar: img1,
    name: "Ana Russo",
    designation: "CEO",
  },
  {
    avatar: img2,
    name: "Danette Payne",
    designation: "CTO",
  },
  {
    avatar: img3,
    name: "Tammy Ward",
    designation: "VP, Product Development",
  },
];
export { teamMembers };
