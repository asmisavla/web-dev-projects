import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Blog from "../components/Blog";


function Article() {
    return (
        <>
            <ResponsiveAppBar/>
            <main style={{ position: 'relative', zIndex: 1 }}>
               <Blog/> 
            </main>
        </>
    );
}

export default Article;
