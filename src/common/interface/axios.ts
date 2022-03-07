import { AxiosResponse } from "axios"

export interface CustomAxiosResponse extends AxiosResponse {
  statusCode?:number,
  message?:string,
  success?:boolean,
  data:any
}
