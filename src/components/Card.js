import React from "react";
import locationImage from "../images/location.png";

function Card(props) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate, description} = props;

    return (
        <div className="card">
            <div className="image-container">
                <img src={imageUrl} alt="" className="card-image" />
            </div> 
            <div className="text-container">
                <div className="location">
                    <img src={locationImage} alt="" className="card-icon" />
                    <span className="card-location">{location}</span>
                    <a href={googleMapsUrl} className="googlemaps-link">View on Google Maps</a>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-date">{startDate} - {endDate}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;