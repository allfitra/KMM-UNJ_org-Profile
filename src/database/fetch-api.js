import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export async function uploadImage(file) {
  if (!file) {
    throw new Error('No file provided for upload');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'kmm-unj');

  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dcfdoyxp6/image/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to upload image. Server says: ${errorText}`);
    }

    const data = await res.json();
    return data.secure_url;
  } catch (error) {
    console.error('❌ Error uploading image to Cloudinary:', error);
    throw error;
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
