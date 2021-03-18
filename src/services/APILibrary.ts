import { fetch, fetchAuth } from '@/utils/request'

const api = {
    productList: 'product',
    customerList: 'customer',
    currentUserInfo: 'user/me',
}

// Product List
export function getProductList(data, limit, page) {
    return fetch({
        url: api.productList + `?limit=${limit}&page=${page}`,
        method: 'GET',
        data,
    })
}

// Customer List
export function getCustomerList(data, limit, page) {
    return fetchAuth({
        url: api.customerList + `?limit=${limit}&page=${page}`,
        method: 'GET',
        data
    })
}

// Current user's info
export function getCurrentUserInfo() {
    let data: any
    return fetchAuth({
        url: api.currentUserInfo,
        method: 'GET',
        data
    })
}