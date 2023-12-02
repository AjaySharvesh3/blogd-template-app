import React, { useEffect, useState } from "react";
import TopNav from "../../../component/TopNav";
import { cssContent } from "../../../constants/style.constants";
import Img from "../../../assets/images/img.png";
import Image from "next/image";
import Footer from "../../../component/Footer";
import GlobalBlogConfig from "../../../config/GlobalBlogConfig.json";
import PoweredByBlogd from "../../../component/PoweredByBlogd";
import { useRouter } from "next/router";
import Articles from "../../../config/Articles.json";

export default function BlogdArticleOne() {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState({});
  const [articleHtml, setArticleHtml] = useState("");

  function getArticleBySlug(slug) {
    const articleKeys = Object.keys(Articles);
    const foundArticleKey = articleKeys.find(
      (key) => Articles[key].slug === slug
    );
    return foundArticleKey ? Articles[foundArticleKey] : null;
  }

  useEffect(() => {
    const currentArticle = getArticleBySlug(id);
    setArticle(currentArticle);
    parseJsonToHtml(currentArticle);
  }, [id]);

  function jsonToHtml(json) {
    if (typeof json === "string") {
      return json;
    }

    const { tag, attributes, children } = json;
    let html = `<${tag}`;

    // Add attributes
    for (const attr in attributes) {
      html += ` ${attr}="${attributes[attr]}"`;
    }

    html += ">";

    // Add children
    for (const child of children) {
      html += jsonToHtml(child);
    }

    html += `</${tag}>`;

    return html;
  }

  const parseJsonToHtml = (currentArticle) => {
    if (currentArticle) {
      console.log("article.json", currentArticle.json);
      const htmlContent = jsonToHtml(currentArticle.json);
      console.log("HTML content", htmlContent);
      setArticleHtml(htmlContent);
    }
  };

  return (
    <>
      <div className="min-h-full text-light-black">
        <TopNav />

        <div className="py-16 mx-auto max-w-5xl mb-0 sm:px-6 lg:px-11 mt-16 mobile:mx-6">
          <div className="flex">
            {GlobalBlogConfig.show_author_and_last_updated_date && (
              <>
                {GlobalBlogConfig.show_author_and_last_updated_position ===
                  "top" && (
                  <div className={"flex"}>
                    {/*<div>
                                            <button type="button"
                                                    className={"flex border border-gray-300 text-gray-700 mr-6 font-medium rounded-full text-sm px-4 py-2.5"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
                                                </svg>
                                                <span>Back</span>
                                            </button>
                                        </div>*/}
                    <div>
                      <div className="flex text-sm tracking-wide leading-relaxed text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-medium">UPDATE</span>
                      </div>
                      <div>
                        <span className="text-sm mt-2">10th May 2021</span>
                      </div>
                    </div>

                    <div className={"ml-12 mb-10"}>
                      <div className="flex text-sm tracking-wide leading-relaxed text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="font-medium">AUTHOR</span>
                      </div>
                      <div>
                        <span className="text-sm mt-2">Ajay Sharvesh M P</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex">
            <div>
              <div className="text-3xl font-bold">{article?.title}</div>

              <div className="text-gray-500 mt-3">{article?.title}</div>
            </div>

            <div className="ml-auto my-auto">
              <button
                type="button"
                className={
                  "flex border border-gray-300 text-gray-700 ml-3 font-medium rounded-full text-sm px-4 py-2.5"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/*<div className="py-8">*/}
          {/*    <Image*/}
          {/*        src={Img}*/}
          {/*        alt="Image Description"*/}
          {/*        layout="responsive"*/}
          {/*        className="w-full rounded"*/}
          {/*    />*/}
          {/*</div>*/}

          {/*{`articleHtml ${articleHtml}`}*/}

          <div className="mt-6">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                        <style>
                          ${cssContent}
                        </style>
                          ${articleHtml}`,
              }}
            />
          </div>

          <div className="flex mt-12 mr-auto">
            {GlobalBlogConfig.show_author_and_last_updated_date && (
              <>
                {GlobalBlogConfig.show_author_and_last_updated_position ===
                  "bottom" && (
                  <div className={"flex"}>
                    {/*<div>
                                            <button type="button"
                                                    className={"flex border border-gray-300 text-gray-700 ml-3 font-medium rounded-full text-sm px-4 py-2.5"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/>
                                                </svg>
                                                <span>Back</span>
                                            </button>
                                        </div>*/}
                    <div>
                      <div className="flex text-sm tracking-wide leading-relaxed text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="font-medium">UPDATE</span>
                      </div>
                      <div>
                        <span className="text-sm mt-2">
                          {article?.last_edited}
                        </span>
                      </div>
                    </div>

                    <div className={"ml-12"}>
                      <div className="flex text-sm tracking-wide leading-relaxed text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="font-medium">AUTHOR</span>
                      </div>
                      <div>
                        <span className="text-sm mt-2">{article?.author}</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <PoweredByBlogd />

        <Footer />
      </div>
    </>
  );
}
