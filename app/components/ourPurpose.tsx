import activities from "../data/activities";
import ActivityCard from "./activityCard";
const OurPurpose = () => {
    return (
        <div className="flex flex-col p-5 gap-14 mb-10 md:mb-20">
            <div className="w-full text-center flex flex-col gap-2">
                <h2 className="font-bold text-3xl md:text-4xl">Fostering AI Innovation</h2>
                <p className="text-xl text-gray-500">We are dedicated to building a thriving AI community focused on responsible and ethical advancements.</p>
            </div>
            <div className="flex flex-col gap-5 md:flex-row lg:gap-10 justify-center">
                {
                    activities.map(activity => <ActivityCard key={activity.id} id={activity.id} title={activity.title} text={activity.text} icon={activity.icon} />)
                }
            </div>
        </div>
    )
}

export default OurPurpose;