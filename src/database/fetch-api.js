import { db } from './firebase';
import axios from 'axios';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { cloudinaryConfig } from './cloudinary-config';


const CLOUDINARY_API_URL = cloudinaryConfig.CLOUDINARY_API_URL;
const CLOUDINARY_CLOUD_NAME = cloudinaryConfig.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = cloudinaryConfig.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_FOLDER = cloudinaryConfig.CLOUDINARY_UPLOAD_FOLDER;

const CLOUDINARY_UPLOAD_URL = `${CLOUDINARY_API_URL}${CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Upload a single image to Cloudinary using Axios.
 * @param {File} file
 * @returns {Promise<string>}
 */

export async function uploadImage(file) {
  if (!(file instanceof File)) {
    throw new Error('Invalid file input. Please provide a valid File object.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  formData.append('folder', CLOUDINARY_UPLOAD_FOLDER);

  try {
    const response = await axios.post(
      CLOUDINARY_UPLOAD_URL,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload progress: ${percent}%`);
        },
      }
    );

    const secureUrl = response.data.secure_url;
    return secureUrl;
  } catch (error) {
    
    throw new Error('Upload image gagal. Silakan coba lagi.');
  }
}

export async function postActivity(activityData) {
  try {
    const collectionRef = collection(db, 'activities');
    const docRef = await addDoc(collectionRef, activityData);

    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
}

export async function getActivities() {
  try {
    const collectionRef = collection(db, 'activities');
    const snapshot = await getDocs(collectionRef);
    const activities = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return activities;
  } catch (e) {
    console.error('Error fetching documents: ', e);
    throw e;
  }
}

export async function deleteActivity(activityId) {
  try {
    const docRef = doc(db, 'activities', activityId);
    await deleteDoc(docRef);
    return true;
  } catch (e) {
    console.error('Error deleting document:', e);
    throw e;
  }
}
