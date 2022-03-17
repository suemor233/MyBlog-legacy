export interface IArticle {
    articleList:{article:IArticleList[],total:number}
}


export interface IArticleList {
    id:string,
    title:string,
    content:string,
    cover:string,
    tags:string,
    category:string,
    createAt:string,
    updateAt:string
}


