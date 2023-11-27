import TopNav from "../component/TopNav";
import React, {useEffect, useState} from "react";
import LatestBlog from "../component/LatestBlog";
import GridBlog from "../component/GridBlog";
import Articles from "../config/Articles.json";
import Footer from "../component/Footer";
import PoweredByBlogd from "../component/PoweredByBlogd";

export default function Home() {
    
    return (
        <>
            <div className="min-h-full text-light-black">
                <TopNav/>
                
                <LatestBlog articles={Articles}/>
                
                <GridBlog articles={Articles}/>
                
                <PoweredByBlogd/>
                
                <Footer/>
            </div>
        </>
    )
}
