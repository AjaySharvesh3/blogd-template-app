import React from "react";
import TopNavMain from "../config/TopNavMain.json";

const Footer = () => {
    
    return (
        <div className="">
            <nav className="bg-white">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        
                        <div className="flex items-center">
                            <div className="flex cursor-pointer items-baseline space-x-4 m-auto text-center ">
                                {/*<div
                                    onClick={() => {
                                        window.location.href = "/";
                                    }}
                                    className="text-gray-800 font-xl font-bold px-3 py-2 m-auto text-center"
                                    aria-current="page">
                                    {FooterMain.store_name}
                                </div>*/}
                            </div>
                        </div>
                        
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                {/*{FooterMain.top_center_menu_items.map(item => (*/}
                                    <div className="text-gray-500 text-xs font-semibold px-3 uppercase tracking-wider py-2 m-auto text-center cursor-pointer"
                                         aria-current="page">
                                        Copyrights 2023 @ {TopNavMain.store_name}
                                    </div>
                                {/*))}*/}
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="flex items-baseline space-x-4 m-auto text-center">
                                {/*<button type="button"
                                    // className={buttonClass}
                                        className={"bg-orange-600 text-white ml-2 font-medium rounded-lg text-sm px-4 py-2.5"}
                                        onClick={() => {
                                            window.location.href = FooterMain.top_right_menu_item.href;
                                        }}>
                                    {FooterMain.top_right_menu_item.name}
                                </button>*/}
                            </div>
                        </div>
                    
                    </div>
                </div>
            </nav>
        
        </div>
    )
}

export default Footer
