import React, {useEffect, useState} from "react";
import AppModal from "../component/AppModal";
import PopupConfig from "../config/PopupConfig.json";
import {POPUP_TRIGGER} from "../constants/app.constants";

export default function NewsletterPopup() {
    
    const [openNewsletterPopup, setOpenNewsletterPopup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showSecondPage, setShowSecondPage] = useState(false);
    
    useEffect(() => {
        if (PopupConfig.popup_trigger === POPUP_TRIGGER[0]) {
            onPageLoad();
        } else if (PopupConfig.popup_trigger === POPUP_TRIGGER[1]) {
            after10Seconds();
        } else if (PopupConfig.popup_trigger === POPUP_TRIGGER[2]) {
            scrollToBottom();
        } else {
            setOpenNewsletterPopup(false);
        }
    }, []);
    
    const onPageLoad = () => {
        const openPopup = () => {
            setOpenNewsletterPopup(true);
        };
        const timer = setTimeout(openPopup, 1000);
        return () => clearTimeout(timer);
    }
    
    const after10Seconds = () => {
        const openPopup = () => {
            setOpenNewsletterPopup(true);
        };
        const timer = setTimeout(openPopup, 10000);
        return () => clearTimeout(timer);
    }
    
    const scrollToBottom = () => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;
            const distanceToBottom = documentHeight - (scrollPosition + windowHeight);
            if (distanceToBottom <= 10) {
                setOpenNewsletterPopup(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    
    const handleCloseModal = () => {
        setOpenNewsletterPopup(false);
    };
    
    return (
        <>
            {openNewsletterPopup && (
                <AppModal title={""}>
                    <div className="">
                        <div className="flex justify-between py-3 px-1 text-sm text-bold">
                            <div className="text-left">
                                <h2 className="text-xl font-bold">
                                    Popup Title
                                </h2>
                            </div>
                            
                            <div onClick={handleCloseModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </div>
                        </div>
                        
                        {!showSecondPage && <div className="mt-4">
                            <form>
                                <div className="relative mt-1">
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-500 ml-2">
                                        Name
                                    </label>
                                    <input type="name" id="name"
                                           className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                           value={name}
                                           onChange={(e) => {
                                               setName(e.target.value);
                                           }}
                                           placeholder="Your full name" required/>
                                </div>
                                
                                <div className="relative mt-4">
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-500 ml-2">
                                        Email
                                    </label>
                                    <input type="email" id="email"
                                           className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                           value={email}
                                           onChange={(e) => {
                                               setEmail(e.target.value);
                                           }}
                                           placeholder="Your email address" required/>
                                </div>
                            </form>
                            
                            <button type="button"
                                    onClick={() => {
                                        setShowSecondPage(true);
                                    }}
                                    className="text-white hover:bg-red-500 bg-orange-600 mt-6 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                Button Text
                            </button>
                        </div>}
                        
                        
                        {showSecondPage &&
                            <>
                                <div className="mt-6 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-green-600 mx-auto text-center">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>
                                    </svg>
                                    <div className="text-gray-800 text-lg mt-4">
                                        Thank you message
                                    </div>
                                    <button type="button"
                                            onClick={handleCloseModal}
                                            className="text-white hover:bg-red-500 bg-orange-600 mt-6 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                                        Close
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </AppModal>
            )}
        </>
    )
};
