import type { RuntimeConfig } from "nuxt/schema"
import type { TArticleResponse } from "~/types/model/article"

const getArticleRemote = async(config: RuntimeConfig) => {
    // const config = useRuntimeConfig()
    let data: TArticleResponse | null = null
    let error: any = null
    try {
        const response = await $fetch<TArticleResponse>('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey='+'7ef128c5a3d444f8ac3e872e47b2aa61',{
            method: "GET"
        })

        data = response
    } catch (err) {
        error = err
    }

    return { data, error }
}

export default getArticleRemote