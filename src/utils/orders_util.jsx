export const fetchAllOrders = () => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/orders', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};