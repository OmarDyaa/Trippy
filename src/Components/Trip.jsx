import "../Styles/TripStyle.css";
import TripData from "./TripData";
import img1 from "./../assets/5.jpg";
import img2 from "./../assets/8.jpg";
import img3 from "./../assets/6.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={img1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of
                Indonesia, is a country in Southeast Asia
                and Oceania between the Indian and
                Pacific oceans. It consists of over 17,000
                islands, including Sumatra, Java, Sulawesi,
                and parts of Borneo and New Guinea"
        />

        <TripData
          image={img2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country
                occupying parts of the Malay Peninsula
                and the island of Borneo. It's known for its
                beaches, rainforests and mix of Malay,
                Chinese, Indian and European cultural
                influences."
        />

        <TripData
          image={img3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses
                 medieval cities, alpine villages and
                Mediterranean beaches. Paris, its capital, is
                famed for its fashion houses, classical art
                museums including the Louvre and
                monuments like the Eiffel Tower."
        />
      </div>
    </div>
  );
}

export default Trip;
