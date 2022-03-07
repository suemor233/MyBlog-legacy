import React, {memo, useEffect} from 'react';
import {ArticleProfile} from "@/components/ArticleProfile";
import {ArticleWrapper} from "@/styles/article";
import {GetStaticProps, InferGetStaticPropsType, NextPage} from "next";
import {fetchUserProfile} from "@/service/modules/user";
import {CustomAxiosResponse} from '@/common/interface/axios'



 const Article: NextPage = memo(function MyArticle( {profile}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <ArticleWrapper>
                <div className={'article-left'}>
                    <div style={{width:'30%'}}>
                        <ArticleProfile
                            username={profile.userName}
                            introduce={profile.introduce}
                            github={profile.githubUrl}
                            twitter={profile.twitterUrl}
                            email={profile.emailUrl}
                            avatar={profile.avatar}
                        />
                    </div>
                </div>
            </ArticleWrapper>
        </>
    );
})

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchUserProfile({username: "suemor"}) as CustomAxiosResponse
    return {
        props: {
            profile:{
                userName:res.data.userName,
                introduce:res.data.introduce,
                githubUrl:res.data.githubUrl,
                emailUrl:res.data.emailUrl,
                twitterUrl:res.data.twitterUrl,
                avatar:res.data.avatar
            }
        },
    };
};

export default Article
