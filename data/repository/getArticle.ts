import type { TArticle } from "~/types/model/article"
import getArticleRemote from "../source/remote/article"
import type { RuntimeConfig } from "nuxt/schema"

const getArticle = async(config: RuntimeConfig): Promise<{data: TArticle[], error: any}> => {
    let data: TArticle[] = []
    const { data: results, error } = await getArticleRemote(config)
    if (results) {
        data = results.articles
    }
    return { data, error }
}

export default getArticle