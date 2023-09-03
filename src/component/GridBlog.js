import React, {useEffect} from "react";
import Image from "next/image";
import Img from "../assets/images/img.png";
import {useRouter} from "next/router";
import TemplateConfig from "../config/TemplateConfig.json";


export default function GridBlog({articles}) {
    
    const router = useRouter();
    let gridClasses = `grid grid-cols-${TemplateConfig.row_count} md:grid-cols-${TemplateConfig.row_count} lg:grid-cols-${TemplateConfig.row_count} gap-4 mobile:grid-cols-1`;
    
    useEffect(() => {
        gridClasses = `grid grid-cols-${TemplateConfig.row_count} md:grid-cols-${TemplateConfig.row_count} lg:grid-cols-${TemplateConfig.row_count} gap-4 mobile:grid-cols-1`;
    }, [TemplateConfig.row_count]);
    
    return (
        <div className={"mb-12"}>
            <div className="mx-auto max-w-5xl sm:px-6 lg:px-11 mobile:mx-6">
                <div className={"text-lg font-bold mt-12"}>
                    All Articles
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    Explore a diverse collection of captivating articles.
                </div>
                
                <div className={gridClasses}>
                    {articles.map(article => (
                        <div className="bg-white hover:drop-shadow-md rounded-xl mt-6">
                            <div className="cursor-pointer"
                                 onClick={() => {
                                     router.push(article.route_url)
                                 }}>
                                <div className="flex-1">
                                    {TemplateConfig.show_image_in_article &&
                                        <Image
                                            src={Img}
                                            alt="Image Description"
                                            layout="responsive"
                                            className="w-full rounded-t-lg transition-transform transform-gpu hover:scale-105 hover:duration-700"
                                        />
                                    }
                                </div>
                                <div className="flex-1 p-4 my-auto ml-4 flex flex-col justify-between h-full">
                                    <div className="text-sm text-gray-500 mt-4">
                                        {article.last_edited}
                                    </div>
                                    <div className="text-lg font-bold mt-4">
                                        {article.title}
                                    </div>
                                    
                                    <div className="flex flex-col justify-between h-full">
                                        
                                        {TemplateConfig.show_meta_description_in_article &&
                                            <div className="text-sm text-gray-500 mt-2">
                                                {article.meta_description}
                                            </div>
                                        }
                                        
                                        <div className="text-sm text-gray-500 mt-6 mb-4">
                                            {article.author}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
