import { IActivity } from "../types";

const ActivityCard = ({id, icon, title, text}: IActivity) => {
    return (
        <div className="flex flex-col gap-1 items-center py-16 px-5 border rounded-md bg-gray-50">
            {icon}
            <h3 className="font-semibold text-2xl">{title}</h3>
            <p className="text-xl w-3/4 text-center text-gray-500 lg:w-2/3">{text}</p>
        </div>
    )
}

export default ActivityCard;