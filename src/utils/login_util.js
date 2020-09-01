var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;


export const fetchLoginAuthentication = url => {
    return fetch(bonmunch_endpoint+'/api/user', {
        headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token") 
        }
    })
        .then(res => res.json())
};


export const fetchLoginAction = (authRequest) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(authRequest)

    })
        .then(res => res.json())
};