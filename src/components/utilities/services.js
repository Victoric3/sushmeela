import React from "react";
import { Link } from "react-router-dom"; 
import NavLinks from "../utilities/navLinks";
import configData from '../../config.json'
const ServicesComponent = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "noWrap",
    justifyContent: "flex-start",
    width: "100%",
    overflowX: "auto",
  };

  const serviceItemStyle = {
    textDecoration: "none",
    textAlign: "center",
    margin: "10px",
    width: "200px",
  };

  const serviceIconStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "10px",
  };

  const serviceNameStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: "10px",
    color: configData.AppColor,
    whiteSpace: 'nowrap'
  };
  const navLinks = NavLinks();
  return (
    <div style={containerStyle}>
      {navLinks[1].children.map((service, index) => (
        <Link to={service.navLink} key={index} style={serviceItemStyle}>
          <img
            src={service.img}
            alt={service.navName}
            style={serviceIconStyle}
          />
          <h2 style={serviceNameStyle}>{service.navName}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ServicesComponent;
