import firstimg from "../assets/1.jpg";
import secondimg from "../assets/2.jpg";
import "../Styles/DestinationStyle.css";
import thirdimg from "../assets/5.jpg";
import fourthimg from "../assets/8.jpg";
import DestinationData from "./DestinationData";
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see alot, within a time frame.</p>
      <DestinationData
        className="frist-des"
        heading="Taa Volcano, Batangas"
        text="One of the most iconinc views in luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. if you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginers. Guides will assist you most of the way, and you 'll see
            the peculiar enviroment found on an active volcano, including
            volcanic rocks and steam vents. the hike can be dusty and hot, so
            plan foa an early morning trip, and then unwind with some bulalo
            before heading bake home!"
        img1={firstimg}
        img2={secondimg}
      />
      <DestinationData
        className="frist-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="If you're looking for a hike that's a little more
challenging but still good for a beginner
mountaineer, check out Mt. Daguldul in San Juan,
Batangas. You'll start your hike from the beach
and pass through tropical forest, different rock
formations, and small streams. There's a small
store halfway up the trail where you can take a
break and drink buko juice, and though the
summit itself may not have the best view, the
breeze is fantastic. Once you've made it back
down, head straight to the beach for a refreshing,
well-deserved swim."
        img1={thirdimg}
        img2={fourthimg}
      />
    </div>
  );
}

export default Destination;
