export const fetchLoginAuthentication = url => {
    return fetch('http://localhost:8082/api/user', {
        headers: { 
            'Authorization': 'Bearer ' + localStorage.getItem("token") 
        }
    })
        .then(res => res.json())
};


export const fetchLoginAction = (authRequest) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(authRequest)

    })
        .then(res => res.json())
};