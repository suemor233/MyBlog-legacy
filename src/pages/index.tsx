import type {NextPage} from 'next'
import {Button} from "antd";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Home: NextPage = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/article')
    }, [])


    return (
        <>

        </>
    )
}

export default Home
