import { db } from './firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export async function postImage(imageFile) {
  try {
    const storageRef = db.storage().ref();
    const imageRef = storageRef.child(`images/${imageFile.name}`);
    await imageRef.put(imageFile);
    const imageUrl = await imageRef.getDownloadURL();
    return imageUrl;
  } catch (e) {
    console.error('Error uploading image: ', e);
    throw e;
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

