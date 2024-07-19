import type { TProductResponse } from "~/types/data/product";

const getProductsRemote = async(url: string) : Promise<{ data: TProductResponse | null, error: any }> => {
    let data: TProductResponse | null = null
    let error: any = null
    try {
        data = await $fetch<TProductResponse>(url, { method: 'GET' });
    } catch (err) {
        error = err
    }
    return { data, error }
}

export default getProductsRemote