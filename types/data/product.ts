export type TProductResponse = {
    message: string
    data: TProduct[]
}

export type TProduct = {
    title: string
    imgSrc: string
    price: number
}