import React from "react";
import Card from "./Card";
import './../styles/Data.css'

const User = ({ login, avatar_url, html_url, type }) => {
  return (
    <Card>
      <img
        src={avatar_url}
        alt={avatar_url}
        className="user__image"
      />
      <div>
        <h1>{login}</h1>
        <h3>{type}</h3>
        <a href={html_url} className="user__link">Go to Profile</a>
      </div>
    </Card>
   
  );
};

export default User;
