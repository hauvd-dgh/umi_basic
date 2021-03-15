import { fetch } from '@/utils/request'

const api = {
    productList: 'product',
}

export function getProductList(data, limit, page) {
    return fetch({
        url: api.productList + `?limit=${limit}&page=${page}`,
        method: 'GET',
        data,
    })
}