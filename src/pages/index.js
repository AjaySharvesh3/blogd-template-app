import TopNav from "../component/TopNav";
import React, {useEffect, useState} from "react";
import LatestBlog from "../component/LatestBlog";
import GridBlog from "../component/GridBlog";
import Articles from "../config/Articles.json";
import Footer from "../component/Footer";
import TopNavMain from "../config/TopNavMain.json";
import PoweredByBlogd from "../component/PoweredByBlogd";
import AppModal from "../component/AppModal";
import NewsletterPopup from "../component/NewsletterPopup";

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
