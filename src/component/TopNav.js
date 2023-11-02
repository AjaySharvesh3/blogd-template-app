import React, {useEffect} from "react";
import {useRouter} from "next/router";
import Articles from "../config/Articles.json";
import TopNavMain from "../config/TopNavMain.json";
import TemplateConfig from "../config/TemplateConfig.json";

const TopNav = () => {
    
    const {accent_color} = TemplateConfig;
    const router = useRouter();
    const [showSearch, setShowSearch] = React.useState(false);
    const [filteredArticles, setFilteredArticles] = React.useState([]);
    
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            setShowSearch(false);
            setFilteredArticles([]);
        }
    };
    
    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);
    
    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        setFilteredArticles([]);
    }
    
    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue === '') {
            setFilteredArticles([]);
        } else {
            const filteredArticles = Articles.filter(article => {
                return article.title.toLowerCase().includes(searchValue);
            });
            setFilteredArticles(filteredArticles);
        }
    }
    
    return (
        /*<div className="w-full fixed top-0 left-0 z-10">*/
        <div className="w-full">
            <nav className="bg-white">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="flex h-20 items-center justify-between">
                        
                        {!showSearch &&
                            <>
                                <div className="flex items-center">
                                    <div className="flex cursor-pointer items-baseline space-x-4 m-auto text-center ">
                                        <div
                                            id={"blogd-store-name"}
                                            onClick={() => {
                                                window.location.href = "/";
                                            }}
                                            className="text-gray-800 font-xl font-bold px-3 py-2 m-auto text-center"
                                            aria-current="page"
                                        >
                                            {TopNavMain.store_name}
                                        </div>
                                    </div>
                                </div>
                                
                                {/*{TemplateConfig.top_menu_position === 'center' &&
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline space-x-4">
                                            {TopNavMain.top_menu_items.map(item => (
                                                <div
                                                    className="text-gray-800 px-3 py-2 m-auto text-center cursor-pointer"
                                                    aria-current="page"
                                                    key={item.name} // Don't forget to add a unique key prop when mapping an array
                                                >
                                                    {item.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }*/}
                                
                                <div className="flex items-center">
                                    <div className="flex items-baseline space-x-4 m-auto text-center">
                                        {/*{TemplateConfig.top_menu_position === 'right' &&
                                            <>
                                                {TopNavMain.top_menu_items.map(item => (
                                                    <div
                                                        className="text-gray-800 px-3 py-2 m-auto text-center cursor-pointer"
                                                        aria-current="page"
                                                        key={item.name} // Don't forget to add a unique key prop when mapping an array
                                                    >
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </>
                                        }*/}
                                        
                                        {TemplateConfig.show_search_bar &&
                                            <button
                                                type="button"
                                                className={`bg-${accent_color}-600 flex text-white ml-2 font-medium rounded-full text-sm px-4 py-2.5`}
                                                onClick={() => {
                                                    handleShowSearch();
                                                }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                                </svg>
                                                <span>Search</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </>
                        }
                        
                        {showSearch &&
                            <div className={"w-full"}>
                                <label htmlFor="default-search"
                                       className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none w-full">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                           onChange={handleSearch}
                                           className={`block w-full p-4 pl-11 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50`}
                                           placeholder="Search Articles..."/>
                                    <button
                                        className={`text-white absolute right-2.5 bottom-2.5 bg-${accent_color}-600 hover:bg-${accent_color}-800 font-medium rounded-full text-sm px-2 py-2`}
                                        onClick={() => {
                                            handleShowSearch();
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                    
                                    
                                    {showSearch &&
                                        <div
                                            className="w-full absolute rounded-lg zIndex bg-white shadow-lg"
                                            style={{
                                                "zIndex": "1000",
                                                "overflowY": "scroll",
                                                "top": "60px",
                                            }}>
                                            {filteredArticles.map((suggestion, index) => {
                                                return (
                                                    <div
                                                        className="p-4 text-gray-600 border w-full cursor-pointer hover:bg-gray-100"
                                                        style={{
                                                            "zIndex": "1000",
                                                        }}
                                                        key={suggestion.id}
                                                        onClick={() => {
                                                            router.push(suggestion.route_url)
                                                        }}>
                                                        {suggestion.title}
                                                    </div>
                                                );
                                            })}
                                        </div>}
                                
                                </div>
                            </div>
                        }
                    
                    </div>
                
                </div>
            </nav>
        </div>
    )
}

export default TopNav
