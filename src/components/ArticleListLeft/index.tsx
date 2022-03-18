import React, {memo} from 'react';
import {ArticleListWrapper} from "./style";
import {Card, Image} from "antd";
import {GithubOutlined, TwitterOutlined} from "@ant-design/icons";
import {IArticle, IArticleList} from "@/common/interface/article";
import {formatTime, formatYearMonth} from "@/utils/format";
import {useRouter} from "next/router";

export const ArticleListLeft: React.FC<IArticle> = memo(({articleList}) => {
    const router = useRouter()
    const routerJump = (id: string) => {
        router.push(`/article/detail/${id}`)
    }
    return (
        <>
            <ArticleListWrapper>
                <Card hoverable={true} style={{width:350}} >
                    <div className={'title'}>
                        <span>最新文章</span>
                        <a onClick={()=>router.push('/archives')}>more</a>
                    </div>

                    {
                        articleList.article.map((item: IArticleList) => {
                            return (
                                <div className={'article'} key={item.id}>
                                    <span>{formatYearMonth(item.createAt)}</span>
                                    <p onClick={()=>routerJump(item.id)}>{item.title}</p>
                                    <span>{item.category}</span>
                                </div>
                            )

                        })
                    }

                </Card>
            </ArticleListWrapper>
        </>
    );
})



