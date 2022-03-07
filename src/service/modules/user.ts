import { post,get } from "../config"

export const fetchUserProfile = (params:any) => {
    return get('/user', params)
}
