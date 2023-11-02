import '../globals.css'
import Head from "next/head";
import NewsletterPopup from "../component/NewsletterPopup";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <script type="module" src="/analytics-script.js"/>
            </Head>
            <Component {...pageProps} />
            <NewsletterPopup/>
        </>
    )
}

export default MyApp
