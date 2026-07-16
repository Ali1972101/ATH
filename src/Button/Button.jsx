import { useState } from "react";
import "./Button.css";

const Button = ({ name, className }) => {
  return (
    <>
      <button className={`btn1 ${className}`}>{name}</button>
      
    </>
  );
};


export default Button;
