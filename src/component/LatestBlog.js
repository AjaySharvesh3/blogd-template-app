import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import Img from "../assets/images/img.png";


export default function LatestBlog({articles}) {
    
    const router = useRouter();
    const [articlesArray, setArticlesArray] = useState([]);
    
    function convertObjectToArray() {
        return Object.values(articles);
    }
    
    useEffect(() => {
        setArticlesArray(convertObjectToArray);
    }, [articles]);
    
    return (
        <div className={""}>
            {/*<div className="mx-auto max-w-5xl sm:px-6 lg:px-11 mt-28 mobile:mx-6">*/}
            <div className="mx-auto max-w-5xl sm:px-6 lg:px-11 mt-6 mobile:mx-6">
                <div className={"text-lg font-bold"}>
                    Our Latest Article
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    Stay up-to-date with our newest and most insightful content on various topics.
                </div>
                
                <div className="bg-white hover:drop-shadow-md rounded-xl mt-6">
                    <div className="grid grid-cols-2 cursor-pointer mobile:grid-cols-1"
                         onClick={() => {
                             router.push(articlesArray[0]?.route_url)
                         }}>
                        <div className="">
                            <Image
                                src={Img}
                                alt="Image Description"
                                layout="responsive"
                                className="w-full rounded-tl-lg rounded-bl-lg mobile:rounded-t-lg transition-transform transform-gpu hover:scale-105 hover:duration-700"
                            />
                        </div>
                        <div className="p-4 my-auto m-auto ml-4 flex flex-col">
                            <div className="text-sm text-gray-500">
                                {articlesArray[0]?.last_edited}
                            </div>
                            <div className="text-lg font-bold mt-4">
                                {articlesArray[0]?.title}
                            </div>
                            
                            <div className="text-sm text-gray-500 mt-2">
                                {articlesArray[0]?.meta_description}
                            </div>
                            
                            <div className="text-sm text-gray-500 mt-6">
                                {articlesArray[0]?.author}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
