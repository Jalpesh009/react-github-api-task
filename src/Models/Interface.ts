export interface IUser {
  login?: string,
  avatar_url?: string,
  repos_url?: string
  }

export interface IRepos {
  name?: string,
  html_url?: string
  }

export interface ResponseGenerator {
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}
  