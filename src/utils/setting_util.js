var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;


export const fetchSiteSetting = () => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/sitesettings', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const uploadSiteSetting = (data) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/sitesettings', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};