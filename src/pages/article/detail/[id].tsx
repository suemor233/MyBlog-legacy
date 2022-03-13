import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
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

    const [content, setContent] = useState("")
    // emoji选择
    const onEmojiClick = useCallback((event: any, emojiObject: any) => {
        setContent(content + emojiObject.emoji)
    },[content])
    return (
        <>
            <ArticleDescWrapper >
                <h2>{articleList.title}</h2>
                <p>最后编辑时间：{formatTime(articleList.updateAt)}</p>
            </ArticleDescWrapper>

            <ArticleDetailWrapper >
                <div className='article-container'>
                    {
                        useMemo(() =>(
                            <>
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
                            </>
                        ),[] )
                    }

                    <div className='content-container'>


                                    <p>共&nbsp;0&nbsp;条评论</p>
                                    <TextArea
                                        value={content}
                                        placeholder='你想对我说什么？'
                                        rows={5}
                                        showCount
                                        maxLength={200}
                                        onChange={e => setContent(e.target.value)}
                                    />

                                    <div className="emoji-container">
                                        <CommentEmojiCpn onEmojiClick={onEmojiClick} />
                                    </div>
                                    <Button className='mt-15 publish-btn' type="primary" onClick={()=>{console.log(content)}}>发表</Button>


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
