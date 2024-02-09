import React from "react";
import { tourList } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tourList.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
