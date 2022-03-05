import "@/assets/css/reset.css"
import "antd/dist/antd.css"
import type {AppProps} from 'next/app'
import {memo} from "react";
import {Provider} from "react-redux";
import store from "@/store";
import {AppHeader} from "@/components/AppHeader";
import {useRouter} from "next/router";
const App = memo( ({Component, pageProps}: AppProps)=> {


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
