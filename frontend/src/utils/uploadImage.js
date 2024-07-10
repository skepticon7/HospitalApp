import { useState } from "react";
import toast from "react-hot-toast";

const useUploadPictureToCloudinary = () => {
  const [loadingUploadImage, setLoadingUploadImage] = useState(false);

  const uploadPictureToCloudinary = async (file) => {
    const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;

    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);
    uploadData.append('cloud_name', cloud_name);

    try {
      setLoadingUploadImage(true);

      const CloudResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: uploadData,
      });

      const data = await CloudResponse.json();

      if (data.error) {
        throw new Error("Error uploading your image to our cloud");
      }
      return data;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingUploadImage(false);
    }
  };

  return { uploadPictureToCloudinary, loadingUploadImage };
};

export default useUploadPictureToCloudinary;
