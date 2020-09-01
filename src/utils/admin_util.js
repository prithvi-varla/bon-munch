var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;

export const fetchAdminInfo = () => {
    return fetch(bonmunch_endpoint +'/bonmunch/v1/companies/adminsummary', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};