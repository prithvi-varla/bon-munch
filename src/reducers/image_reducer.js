import { IMAGE_INFO, ALL_IMAGES, SINGLE_UPLOAD_RESPONSE } from '../actions/image_actions';

const imageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case IMAGE_INFO:
      return action.imageInfo;
    case ALL_IMAGES:
      return action.allImages;
    case SINGLE_UPLOAD_RESPONSE:
      return action.singleUploadResponse;  
    default:
      return oldState;
  }
};

export default imageReducer;
