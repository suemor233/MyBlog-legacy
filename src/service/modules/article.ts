import { get } from "../config"

export const fetchArticleList = (params?:any) => {
    return get('/article', params)
}

export const fetchArticleById = (params?:any) => {
    return get(`/article/${params.id}`)
}
