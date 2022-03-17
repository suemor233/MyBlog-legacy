import React, {memo, useEffect} from 'react';
import {ArticleProfile} from "@/components/ArticleProfile";
import {ArticleWrapper} from "@/styles/article";
import {GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage} from "next";
import {fetchUserProfile} from "@/service/modules/user";
import {CustomAxiosResponse} from '@/common/interface/axios'
import {fetchArticleList} from "@/service/modules/article";
import {Empty} from "antd";
import {useRouter} from "next/router";
import {ArticleCard} from "@/components/ArticleCard";
import {IArticleList} from "@/common/interface/article";

 const Article: NextPage = memo(( {profile,articleList}: InferGetServerSidePropsType<typeof getServerSideProps>)=> {
     const router = useRouter()
     const routerJump = (id: string) => {
         router.push(`/article/detail/${id}`)
     }
    return (
        <>
            <ArticleWrapper>
                <div className={'article-left'}>
                    <div >
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

                <div className={'article-right'}>
                    {
                        articleList && articleList.length
                            ?
                            <div className="article-left">
                                {
                                    articleList && articleList.map((item: IArticleList) => {
                                        return (
                                            <div key={item.id} onClick={() => routerJump(item.id)}>
                                                <ArticleCard
                                                    id={item.id}
                                                    title={item.title}
                                                    content={item.content}
                                                    cover={item.cover}
                                                    tags={item.tags}
                                                    createAt={item.createAt}
                                                    updateAt={item.updateAt}
                                                    category={item.category} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            :
                            <Empty
                                style={{ flex: 3, height: '100vh', lineHeight: '100vh', color: '#888' }}
                                description="抱歉 这里现在什么内容都没有的喵～"/>
                    }

                </div>
            </ArticleWrapper>
        </>
    );
})

export const getServerSideProps: GetServerSideProps = async () => {
    const profile = await fetchUserProfile({username: "suemor"}) as CustomAxiosResponse
    const article = await fetchArticleList({pageNum: 1, pageSize: 10}) as CustomAxiosResponse
    console.log(article.data)
    return {
        props: {
            profile:{
                userName:profile.data.userName,
                introduce:profile.data.introduce,
                githubUrl:profile.data.githubUrl,
                emailUrl:profile.data.emailUrl,
                twitterUrl:profile.data.twitterUrl,
                avatar:profile.data.avatar
            },
            articleList:article.data.article
        },
    };
};

export default Article
