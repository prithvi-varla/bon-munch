import * as ImageInfo from '../utils/image_util';

export const IMAGE_INFO = 'IMAGE_INFO';
export const ALL_IMAGES = 'ALL_IMAGES';
export const SINGLE_UPLOAD_RESPONSE = 'SINGLE_UPLOAD_RESPONSE';

export const receiveImageInfo = imageInfo => {
  return ({
    type: IMAGE_INFO,
    imageInfo
  });
};

export const receiveAllImages = allImages => {
  return ({
    type: ALL_IMAGES,
    allImages
  });
};

export const uploadSingleImageResponse = singleUploadResponse => {
  return ({
    type: SINGLE_UPLOAD_RESPONSE,
    singleUploadResponse
  });
};

export const fetchAllImages = (imageType) => dispatch => {
  return (
  ImageInfo.fetchAllImages(imageType)
  .then((allImages) => dispatch(receiveAllImages(allImages))));
};

export const uploadSingleImage = (formData, imageType, imageName) => dispatch => {
  return (
  ImageInfo.uploadSingleImage(formData, imageType, imageName)
  .then((singleUploadResponse) => dispatch(uploadSingleImageResponse(singleUploadResponse))));
};


export const deleteImage = (id, imageType) => dispatch => {
  return (
    ImageInfo.deleteImage(id, imageType)
  .then((deleteReponse)  => dispatch(fetchAllImages(imageType))));
};





