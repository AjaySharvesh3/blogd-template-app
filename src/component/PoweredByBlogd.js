import React from "react";
import Blogd from "../assets/images/blogd_dark_logo.png";
import Image from "next/image";


export default function PoweredByBlogd() {
    
    return (
        <>
            <div className="fixed bottom-0 right-0 p-4">
                <button
                    type="button"
                    className="bg-orange-600 text-white text-xs font-medium rounded-lg px-3 py-1.5"
                    onClick={() => {
                    }}>
                    {/*<Image
                        src={Blogd}
                        alt="Blogd Logo"
                        layout="responsive"
                        className="w-[10px] rounded"
                    />*/}
                    <div>Powered by Blogd</div>
                </button>
            </div>
        </>
    )
}
