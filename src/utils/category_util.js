export const fetchCategoryById = (categoryId) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/categories/'+ categoryId, {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const fetchAllCategories = (categoryType) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/categories?categoryType='+ categoryType, {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const createCategory = (data, actionName) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/categories?action='+ actionName, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};

export const deleteCategory = (id) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/categories/'+ id, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res)
};