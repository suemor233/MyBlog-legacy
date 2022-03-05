import "@/assets/css/reset.css"
import "antd/dist/antd.css"
import type {AppProps} from 'next/app'
import {memo, useEffect} from "react";
import {Provider} from "react-redux";
import store from "@/store";
import {AppHeader} from "@/components/AppHeader";
import {useRouter} from "next/router";

import nProgress from "nprogress"
import "nprogress/nprogress.css"
const App = memo( ({Component, pageProps}: AppProps)=> {

    const router = useRouter()
    useEffect(()=>{
        const Events = router.events
        Events.on("routeChangeStart", () => {
            nProgress.start()
        })
        Events.on("routeChangeComplete", () => {
            nProgress.done()
        })

        return () => {
            Events.off("routeChangeStart", () => { })
            Events.off("routeChangeComplete", () => { })
        }
    },[])

    return (
        <>
            <Provider store={store}>
                <AppHeader />
                <div className='container-wrap mt-20 pb-20'>
                    <Component {...pageProps} />
                </div>
            </Provider>
        </>
    )
})

export default App
