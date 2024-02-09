import React from "react";
import { serviceList } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="services" />

      <div className="section-center services-center">
        {serviceList.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default Services;
