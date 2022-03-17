import React, {memo, ReactElement, useCallback, useEffect, useState} from 'react';
import {Card, Empty, Pagination, Timeline} from "antd";
import {ArticleArchivesWrapper} from "@/components/ArticleArchives/style";
import {IArticle, IArticleList} from "@/common/interface/article";
import {ArticleCard} from "@/components/ArticleCard";
import {useRouter} from "next/router";
import {formatTime} from "@/utils/format";
import {fetchArticleList} from "@/service/modules/article";


 const ArticleArchives: React.FC<IArticle> = memo(
    (
        {
            articleList
        }
    ): ReactElement => {
        const router = useRouter()
        const routerJump = (id: string) => {
            router.push(`/article/detail/${id}`)
        }
        const [pageNum, setPageNum] = useState(1)
        const [articleTotal, setArticleTotal] = useState(articleList.total)
        const [article, setArticle] = useState(articleList.article)
        // 重置文章数据
        const resetArticleList = useCallback(async (page: number,) => {
            const articleData: any = await fetchArticleList({pageNum: page, pageSize: 10})
            console.log(articleData)
            setArticle(articleData.data.article)
            setArticleTotal(articleData.data.total)
        }, [])

        const pageChange = useCallback(async (page: number) => {
            setPageNum(page)
            resetArticleList(page)
        }, [resetArticleList])
    return (
        <>
            <ArticleArchivesWrapper>
                <Card style={{ width: '100%' }} bordered={true} hoverable={true}>
                    {
                        article && article.length
                            ?
                            <div>
                                <p className={'article-length'}>共计 {articleTotal} 篇文章</p>
                                {
                                    article && article.map((item:IArticleList) =>{
                                       return (
                                            <div className={'article-columns'} key={item.id}  onClick={() => routerJump(item.id)}>
                                                <span>{item.title}</span>
                                                <span>{formatTime(item.createAt)}</span>
                                            </div>
                                        )
                                    })
                                }
                                <Pagination
                                    onChange={pageChange}
                                    current={pageNum}
                                    pageSize={10}
                                    showTotal={(articleTotal) => `共 ${articleTotal} 篇`}
                                    total={articleTotal} />
                            </div>
                            :
                            <Empty
                                style={{ flex: 3, height: '100vh', lineHeight: '100vh', color: '#888' }}
                                description="抱歉 这里现在什么内容都没有的喵～"/>
                    }

                </Card>
            </ArticleArchivesWrapper>

        </>
    );
})
export default ArticleArchives
