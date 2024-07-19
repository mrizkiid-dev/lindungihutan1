import type { TProduct, TProductResponse } from "~/types/data/product"
import getProductsRemote from "../source/getProductsRemote"

const getProducts = async<T>(url: string): Promise<{ data: T | undefined, error: any }> => {
    let data: T | undefined
    let error: any
    
    try {
        const { data: result, error } = await getProductsRemote(url)
        data = result?.data as T
        throw error
    } catch (err) {
        error = err
    }

    return { data, error }
}

export default getProducts