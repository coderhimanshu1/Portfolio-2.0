import Header from "./ServicesHeader";
import "../static/styles/services/services.css";

import React from "react";
import Title from "../common/title";

const services = [
  {
    category: "Web Application Development",
    items: [
      "Custom Web Application Development",
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "Responsive Web Design",
      "UI/UX Design and Implementation",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "API Development and Integration",
      "Microservices Architecture",
      "Database Design and Management",
      "Backend Performance Optimization",
      "Authentication and Authorization Systems",
    ],
  },
  {
    category: "Full Stack Development",
    items: [
      "End-to-End Web Application Development",
      "Frontend and Backend Integration",
      "Real-time Data Processing",
      "Scalable Application Architecture",
      "Maintenance and Support",
    ],
  },
  {
    category: "Database Management",
    items: [
      "Database Schema Design",
      "Database Performance Tuning",
      "Data Security and Integrity",
    ],
  },
  {
    category: "DevOps and Infrastructure",
    items: ["Containerization and Orchestration", "Cloud Services Integration"],
  },
  {
    category: "Quality Assurance and Testing",
    items: ["Automated Testing", "Manual Testing", "Performance Testing"],
  },
  {
    category: "AI Integration",
    items: ["AI-driven Application Development"],
  },
];

const Services = () => (
  <div className="services-page">
    <header className="services-header">
      <h1>Professional Software Development Services</h1>
      <p>
        Delivering innovative and tailored solutions to meet your business
        needs.
      </p>
    </header>
    <Header />
    <div className="services-intro">
      <h2>Services I Offer</h2>
      <p>
        Explore a range of professional software development services designed
        to elevate your business.
      </p>
    </div>

    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service-category">
          <h2>{service.category}</h2>
          <ul>
            {service.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
