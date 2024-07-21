export type TArticleResponse = {
    status: string
    totalResults: number
    articles: TArticle[]
  }
  
  export type TArticle = {
    source: TSource
    author?: string
    title: string
    description?: string
    url: string
    urlToImage?: string
    publishedAt: string
    content: string
  }
  
  export type TSource = {
    id?: string
    name: string
  }