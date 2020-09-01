var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;


export const fetchProduct = (productId) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/products/'+ productId, {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const fetchAllProducts = () => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/products', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const createProduct = (data, actionName) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/products?action='+actionName, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};

export const deleteProduct= (id) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/products/'+ id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res)
};