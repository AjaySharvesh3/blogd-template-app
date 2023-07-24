import React from "react";
import TopNav from "../component/TopNav";
import {cssContent} from "../constants/style.constants";

export default function SamplePage() {
    
    // Change the below line alone
    const htmlConstant = `<div>Test HTML</div>`;
    
    return (
        <>
            <div className="min-h-full text-light-black">
                <TopNav/>
                <div className="py-16 px-52">
                    <div dangerouslySetInnerHTML={{
                        __html: `
                        <style>
                          ${cssContent}
                        </style>
                        ${htmlConstant}
                    `
                    }}/>
                </div>
            </div>
        </>
    )
}
