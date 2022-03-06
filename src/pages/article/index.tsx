import React from 'react';
import {ArticleProfile} from "@/components/ArticleProfile";
import {ArticleWrapper} from "@/styles/article";

 const Article: React.FC = () => {
    return (
        <>
            <ArticleWrapper>
                <div className={'article-left'}>
                    <div style={{width:'30%'}}>
                        <ArticleProfile/>

                    </div>
                </div>
            </ArticleWrapper>
        </>
    );
}

export default Article
