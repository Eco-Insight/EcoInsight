// types
import { Project } from "./types";

// images
import member2 from "../../assets/images/avatars/img-5.jpg";
import member1 from "../../assets/images/avatars/img-8.jpg";

const projects: Project[] = [
  {
    time: "Aug 09, 2020",
    title: "Shreyu - Design Updates",
    state: {
      name: "Designing",
      variant: "primary",
    },
    description: "Update shreyu with modern and latest trends...",
    progress: {
      value: 75,
      variant: "success",
    },
    member: [member1, member2],
  },
  {
    time: "Aug 10, 2020",
    title: "Listim - Dashboard UI",
    state: {
      name: "Development",
      variant: "orange",
    },
    description: "Texto de descrição do projeto Listim - Dashboard UI",
    progress: {
      value: 50,
      variant: "danger",
    },
    member: [member1, member2],
  },
  {
    time: "Aug 11, 2020",
    title: "beagle - Development",
    state: {
      name: "Testing",
      variant: "info",
    },
    description: "Texto de descrição do projeto beagle - Development",
    progress: {
      value: 60,
      variant: "warning",
    },
    member: [member1, member2],
  },
];

export { projects };
