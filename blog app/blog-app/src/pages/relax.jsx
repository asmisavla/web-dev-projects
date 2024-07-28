import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import NewsCards from "../components/NewsCards";


function Relax() {
    return (
        <>
            <ResponsiveAppBar/>
            <main style={{ position: 'relative', zIndex: 1 }}>
               <NewsCards/> 
            </main>
        </>
    );
}

export default Relax;
