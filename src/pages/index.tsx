import type { NextPage } from 'next'
import {Button} from "antd";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const router = useRouter()
    router.push('/article')
    return(
        <>

        </>
    )
}

export default Home
