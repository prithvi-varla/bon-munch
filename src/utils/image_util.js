var bonmunch_endpoint = process.env.REACT_APP_BONMUNCH_END_POINT;


export const fetchAllImages = (imageType) => {
    var df = localStorage.getItem("token");
    var s = localStorage.token;
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/images?page=0&imageType='+imageType, {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res.json())
};


export const uploadSingleImage = (formData, imageType, imageName, imageDescription, buttonName, buttonUri) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/images?imageType='
    +imageType +'&imageName='+imageName+'&imageDescription='+imageDescription+'&buttonName='+buttonName+'&buttonUri='+buttonUri, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer '+localStorage.getItem("token")
        },
        body: formData
    })
        .then(res => res.json())
};

export const deleteImage = (id, imageType) => {
    return fetch(bonmunch_endpoint+'/bonmunch/v1/companies/images/'+ id + "?imageType="+ imageType, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem("token")
        }
    })
        .then(res => res)
};