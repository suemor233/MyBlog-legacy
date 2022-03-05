import "@/assets/css/reset.css"
import "antd/dist/antd.css"
import type {AppProps} from 'next/app'
import {memo} from "react";
import {Provider} from "react-redux";
import store from "@/store";

const App = memo(function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
})

export default App
