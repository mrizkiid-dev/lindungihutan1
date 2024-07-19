import { promises as fs } from 'fs';
import path from 'path';
  
export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const filePath = path.resolve('public', './json/products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const products = JSON.parse(data) as {title: string, imageSrc: string, price: number}[];

    if (query && query.title && typeof query.title === 'string') {
        const queryTitle = query.title.toLowerCase();

        const productsResult = products.filter((product) => {
            const productTitle = String(product.title).toLowerCase();
            return productTitle.includes(queryTitle);
        });

        return {
          message: 'success',
          data: productsResult
        }
    }

    return {
      message: 'success',
      data: products
    }
  })