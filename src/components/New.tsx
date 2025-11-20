import ListItem from "./ListItem"

function New() {
    return <div className="bg-very-dark-blue p-6 flex flex-col my-16">
        <h2 className="text-soft-orange font-bold text-3xl mb-5 ">New</h2>
        <ul className="flex flex-col gap-4">
            <ListItem border={true} question="Hydrogen vs Electric Cars" answer="Will hydrogen-fueled cars ever catch upto EVs?" />
            <ListItem border={true} question="The Downsides of AI Artistry" answer="What are the possible adverse affects of on-demand AI image generation?" />
            <ListItem border={false} question="Is VC Funding Drying Up?" answer="Private funding by VC firms are down by 50% YOY. We take a look at what that means." />
        </ul>
    </div>
}

export default New