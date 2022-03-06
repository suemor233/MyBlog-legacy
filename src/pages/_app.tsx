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
import AppLoading from "@/components/AppLoading";
import {BackTop, Tooltip} from "antd";
import {AppFooter} from "@/components/AppFooter";
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
    },[router])

    return (
        <>
            <Provider store={store}>
                    <AppHeader />
                <div className={'container-width'}>
                    <div className='container-wrap pt-20 pb-20'>
                        <Component {...pageProps} />
                    </div>
                    <AppLoading />
                </div>
                <AppFooter />
                <Tooltip title="返回顶部"><BackTop /></Tooltip>
            </Provider>
        </>
    )
})

export default App
