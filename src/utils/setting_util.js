export const fetchSiteSetting = () => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/sitesettings', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const uploadSiteSetting = (data) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/sitesettings', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};