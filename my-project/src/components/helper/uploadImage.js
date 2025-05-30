import axios from 'axios';
export const uploadImageToCloudinaryRemote = async (file) => {
  
  const formData = new FormData();
  formData.append('file', file); 
  formData.append('upload_preset', 'blog_image_uploads'); 
  formData.append('cloud_name', `${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}`); 
  // console.log('response.data',file,formData);
  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, 
      formData
    );

    // console.log(response.data);
    return response.data; 
  } catch (error) {
    // console.log('Error uploading to Cloudinary', error);
    return null;
  }
};
