import React, {memo, useEffect, useState} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import {fetchUserProfile} from "@/service/modules/user";
import {CustomAxiosResponse} from "@/common/interface/axios";
import {useRouter} from "next/router";
import {Empty} from "antd";


 const About: NextPage= memo(({profile}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
     const router = useRouter()
     useEffect(() => {
         if (profile.about){
             router.push(`/article/detail/${profile.about}`)
         }

     }, [])

     return (
        <>
            <Empty
                style={{ flex: 3, height: '100vh', lineHeight: '100vh', color: '#888' }}
                description="抱歉 这里现在什么内容都没有的喵～"/>
        </>
    );
})

export const getServerSideProps: GetServerSideProps = async () => {
    const profile = await fetchUserProfile({username: "suemor"}) as CustomAxiosResponse
    return {
        props: {
            profile:{
                about:profile.data.about
            },

        },
    };
};

export default About
