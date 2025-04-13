// src/components/Card.js

// benefits
// 1- enforces standards of a component
// 2- increases reusability
// 3- increases readability

export default function Card({ image, title, description }) {
    return (
        <div className="card">
            <img style={{
                height: "200px",
                width: "240px",
            }} src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
