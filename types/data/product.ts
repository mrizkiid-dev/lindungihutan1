export type TProductResponse = {
    message: string
    data: TProduct[]
}

export type TProduct = {
    title: string
    imageSrc: string
    price: number
}