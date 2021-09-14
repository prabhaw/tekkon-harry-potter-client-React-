import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  dob: string;
  image: string;
}
const FilePath = process.env.REACT_APP_IMG_URL;
const HarryPorrterCard: React.FC<CardProps> = ({ id, name, dob, image }) => {
  return (
    <div className="card">
      <img
        src={`${FilePath}/${image}`}
        className="card-img-top card-image-h"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{dob}</p>
        <Link to={`/${id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HarryPorrterCard;
