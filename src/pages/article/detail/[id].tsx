import React, {memo, useCallback, useEffect, useState} from 'react';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {fetchUserProfile} from "@/service/modules/user";
import {CustomAxiosResponse} from "@/common/interface/axios";
import ReactMarkdown from 'react-markdown'
import {fetchArticleById, fetchArticleList} from "@/service/modules/article";
import {
    ArticleDescWrapper,
    ArticleDetailWrapper,
    ArticleDetailContent,
    ArticleDetailOutLine
} from "@/styles/detail"
import "highlight.js/styles/github-dark.css"
import {formatTime} from "@/utils/format";
import MarkdownNavbar from "markdown-navbar";
import {Affix, Button} from "antd";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// @ts-ignore
import {googlecode} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import gfm from 'remark-gfm'
import rehypeRaw from "rehype-raw";
import CommentEmojiCpn from "@/components/CommentEmojiCpn";
import TextArea from "antd/lib/input/TextArea";
import {ArticleComments} from "@/components/ArticleComments";

const ArticleDetail: React.FC = memo(( {articleList}: InferGetServerSidePropsType<typeof getServerSideProps>)=> {


    console.log('re')
    return (
        <>
            <ArticleDescWrapper >
                <h2>{articleList.title}</h2>
                <p>最后编辑时间：{formatTime(articleList.updateAt)}</p>
            </ArticleDescWrapper>

            <ArticleDetailWrapper >
                <div className='article-container'>
                    <ReactMarkdown children={articleList.content} rehypePlugins={[rehypeRaw]} remarkPlugins={[gfm]}    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={googlecode}
                                    language={match[1]}
                                    PreTag="div"
                                    showLineNumbers={true}
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}/>
                    <div className='content-container'>
                        <ArticleComments/>
                    </div>
                </div>

            </ArticleDetailWrapper>
        </>
    );
})


export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const id = await ctx.query.id
    const article =  await fetchArticleById({id}) as CustomAxiosResponse
    return {
        props: {
            articleList:article.data
        },
    };
};


export default ArticleDetail
