import React, {memo, useCallback, useEffect, useState} from 'react';
import {ArticleProfile} from "@/components/ArticleProfile";
import {ArticleWrapper} from "@/styles/article";
import {GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage} from "next";
import {fetchUserProfile} from "@/service/modules/user";
import {CustomAxiosResponse} from '@/common/interface/axios'
import {fetchArticleList} from "@/service/modules/article";
import {Empty, Pagination} from "antd";
import {useRouter} from "next/router";
import {ArticleCard} from "@/components/ArticleCard";
import {IArticle, IArticleList} from "@/common/interface/article";
import {ArticleListLeft} from "@/components/ArticleListLeft";

 const Article: NextPage = memo(( {profile,articleList}: InferGetServerSidePropsType<typeof getServerSideProps>)=> {
     const router = useRouter()
     const routerJump = (id: string) => {
         router.push(`/article/detail/${id}`)
     }

     const [pageNum, setPageNum] = useState(1)
     const [articleTotal, setArticleTotal] = useState(articleList.total)
     const [article, setArticle] = useState<IArticleList[]>(articleList.article)

     // 重置文章数据
     const resetArticleList = useCallback(async (page: number) => {
         const articleData = await fetchArticleList({pageNum: page, pageSize: 4}) as CustomAxiosResponse

         setArticle(articleData.data.article)
         setArticleTotal(articleData.data.total)
     }, [])

     const pageChange = useCallback(async (page: number) => {
         setPageNum(page)
         resetArticleList(page)
     }, [resetArticleList])
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

                        <ArticleListLeft
                            articleList={articleList}
                        />
                    </div>
                </div>

                <div className={'article-right'}>
                    {
                        article && article.length
                            ?
                            <div className="article-left">
                                {
                                    article && article.map((item: IArticleList) => {
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
                                <Pagination
                                    onChange={pageChange}
                                    current={pageNum}
                                    pageSize={4}
                                    showTotal={(articleTotal) => `共 ${articleTotal} 篇`}
                                    total={articleTotal} />
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
    const article = await fetchArticleList({pageNum: 1, pageSize: 4}) as CustomAxiosResponse

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
            articleList:article.data
        },
    };
};

export default Article
