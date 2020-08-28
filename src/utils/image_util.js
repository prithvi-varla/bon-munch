export const fetchAllImages = (imageType) => {
    var df = localStorage.getItem("token");
    var s = localStorage.token;
    return fetch('http://localhost:9091/bonmunch/v1/companies/images?page=0&imageType='+imageType, {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const uploadSingleImage = (formData, imageType, imageName) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/images?imageType='+imageType +'&imageName='+imageName, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: formData
    })
        .then(res => res.json())
};

export const deleteImage = (id, imageType) => {
    return fetch('http://localhost:9091/bonmunch/v1/companies/images/'+ id + "?imageType="+ imageType, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res)
};