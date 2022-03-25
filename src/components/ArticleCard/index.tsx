import React, {memo, ReactElement} from 'react';
import {IArticleList} from "@/common/interface/article";
import {FormOutlined, TableOutlined, TagOutlined,FileTextOutlined} from "@ant-design/icons";
import {Card, Image, Tag} from "antd";
import { ArticleCardWrapper } from "./style"
import {formatCategory, formatTime} from "@/utils/format";
import {COLORS} from "@/common/colors";

export const ArticleCard: React.FC<IArticleList> = memo(
    (
        {
            cover,
            title,
            createAt,
            tags,
            category,
            content
        }
    ): ReactElement => {
        return (
            <>
                <ArticleCardWrapper>
                    <Card style={{width:'100%'}} hoverable={true}>
                        <div className="card-item-left">
                            <Image preview={false} src={cover} height={300} width={400} alt='文章列表_文章封面' />
                        </div>
                        <div className="card-item-right">
                            <h3 className='text-two-line'>{title}</h3>
                            <p>
                                <strong><FileTextOutlined />&nbsp;&nbsp;字数：{content.length}个字符</strong>
                            </p>
                            <p className='card-item-tags'>
                                <strong><TagOutlined />&nbsp;&nbsp;标签：</strong>
                                {
                                    tags.split(",").map((item: any, index: number) => {
                                        return <Tag key={index} color={COLORS[index]}>{item}</Tag>
                                    })
                                }
                            </p>
                            <p>
                                <strong><TableOutlined />&nbsp;&nbsp;文章类别：</strong>
                                <Tag color="#2db7f5">{formatCategory(category)}</Tag>
                            </p>
                            <p><strong><FormOutlined />&nbsp;&nbsp;发布时间：</strong>{formatTime(createAt)}</p>
                        </div>
                        {/* 三个彩球 */}
                        <div className='three-colors-ball'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Card>
                </ArticleCardWrapper>

            </>
        );
    })
