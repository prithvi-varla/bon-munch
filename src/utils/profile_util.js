export const fetchUserProfile = () => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/users?searchField=userId', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const updateUserProfile = (data, isPasswordChanged) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/users?isPasswordChanged='+isPasswordChanged, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
            }
            return response.json();
        })
};