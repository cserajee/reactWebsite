import React from "react";

const Tour = ({ title, img, date, text, location, day, amount }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>{day} days</p>
          <p>from ${amount}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
