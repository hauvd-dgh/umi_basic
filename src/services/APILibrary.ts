import { fetch, fetchAuth } from '@/utils/request'

const api = {
    productList: 'product',
    customerList: 'customer'
}

//Product List
export function getProductList(data, limit, page) {
    return fetch({
        url: api.productList + `?limit=${limit}&page=${page}`,
        method: 'GET',
        data,
    })
}

//Customer List
export function getCustomerList(data, limit, page) {
    return fetchAuth({
        url: api.customerList + `?limit=${limit}&page=${page}`,
        method: 'GET',
        data
    })
}