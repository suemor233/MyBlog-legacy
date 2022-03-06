import React from 'react';
import {ArticleProfile} from "@/components/ArticleProfile";
import {ArticleWrapper} from "@/styles/article";

 const Article: React.FC = () => {
    return (
        <>
            <ArticleWrapper>
                <div className={'article-left'}>
                    <ArticleProfile/>
                </div>
            </ArticleWrapper>
        </>
    );
}

export default Article
