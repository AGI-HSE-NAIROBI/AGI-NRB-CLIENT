import { AiOutlineUsergroupDelete, AiOutlineCode  } from "react-icons/ai";
import { IActivity } from "../types";

const activities:IActivity[] = [
    {
        id: 1,
        title: "Community Building",
        text: "Join a network of AI enthusiasts and professionals.",
        icon: <AiOutlineUsergroupDelete color={"#1a73e9"} size={36} /> 
    },
    {
        id: 2,
        title: "Hackathons",
        text: "Participate in hackathons to innovate and create.",
        icon: <AiOutlineCode color={"#1a73e9"} size={36} /> 
    },

]

export default activities;