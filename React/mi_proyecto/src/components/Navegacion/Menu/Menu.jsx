import React from "react";
import MenuWeb from "./MenuWeb/MenuWeb";
import MenuMovile from "./MenuMovile/MenuMovile";
import { useEffect, useState } from "react"; 

const Menu = () => {
const [activo, setActivo] = useState (false)
  return (
    <>
      <MenuMovile setActivo={setActivo} />
      <MenuWeb/>
     
    </>
  );
};

export default Menu;
