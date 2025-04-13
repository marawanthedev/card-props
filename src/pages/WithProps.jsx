// src/pages/WithProps.js
import PickahuImage from "../assets/pickachu.jpg";
import PickahuTwoImage from "../assets/pickahu-2.jpg";


import Card from "../components/Card";

export default function WithProps() {
    return (
        <div style={{ width: "100%" }}>
            <h1 style={{ textAlign: "center" }}>✅ Card With Props</h1>

            <div className="container">
                <Card
                    image={PickahuImage}
                    title="Pickachu"
                    description="Fire-type Pokémon"
                />
                <Card
                    image={PickahuTwoImage}
                    title="Pickachu 2"
                    description="Fire-type Pokémon"
                />
            </div>
        </div>
    );
}
