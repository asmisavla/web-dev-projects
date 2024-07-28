import React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HomeImage from "../components/HomeImage";
import ImageGallery from "../components/ImageGallery";

function Home() {
    return (
        <>
            <ResponsiveAppBar/>
            <main style={{ position: 'relative', zIndex: 1 }}>
                <HomeImage />
                <ImageGallery />
            </main>
        </>
    );
}

export default Home;
