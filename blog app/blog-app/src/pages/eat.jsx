// Eat.jsx
import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Cuisine1 from "../components/Cuisine1";
import Cuisine2 from "../components/Cuisine2";
import Cuisine3 from "../components/Cuisine3";

function Eat() {
  return (
    <>
      <ResponsiveAppBar />
      <main style={{ position: 'relative', zIndex: 1, overflowX: 'auto', overflowY: 'auto' }}>
        <Cuisine1 />
        <Cuisine2 />
        <Cuisine3 />
      </main>
    </>
  );
}

export default Eat;
