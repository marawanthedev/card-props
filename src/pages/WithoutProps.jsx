// src/pages/WithoutProps.js
import PickahuImage from "../assets/pickachu.jpg";
import PickahuTwoImage from "../assets/pickahu-2.jpg";

import "../App.css"

export default function WithoutProps() {
    return (
        <div>
            <h1>❌ Cards Without Props</h1>

            <div className="container">
                <div className="card">
                    <img src={PickahuImage} alt="Pikachu" />
                    <h2>Pikachu</h2>
                    <p>Electric-type Pokémon</p>
                </div>
                <div className="card">
                    <img src={PickahuTwoImage} alt="Pikachu" />
                    <h2>Pikachu 2</h2>
                    <p>Electric-type Pokémon</p>
                </div>
            </div>
        </div>
    );
}
