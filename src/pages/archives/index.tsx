import React, {memo, ReactElement} from 'react';
import {ArticleWrapper} from "@/styles/article";
import ArticleArchives from "@/components/ArticleArchives";
import {GetServerSideProps, InferGetServerSidePropsType, NextPage} from "next";
import {CustomAxiosResponse} from "@/common/interface/axios";
import {fetchArticleList} from "@/service/modules/article";
import {IArticle} from "@/common/interface/article";


 const Archives: NextPage<IArticle> = memo(( {articleList}: InferGetServerSidePropsType<typeof getServerSideProps>):ReactElement=> {
    return (
        <>
            <ArticleWrapper>
                <div className={'article-center'}>
                    <p className={'article-title'}>文章归档</p>
                   <ArticleArchives articleList={articleList}/>
                </div>
            </ArticleWrapper>
        </>
    );
})


export const getServerSideProps: GetServerSideProps = async () => {
    const article = await fetchArticleList({pageNum: 1, pageSize: 10}) as CustomAxiosResponse
    return {
        props: {
            articleList:article.data
        },
    };
};

export default Archives
