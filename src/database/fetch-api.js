// importing db firebase
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export async function postActivity(activityData) {
  try {
    const collectionRef = collection(db, 'activities');
    const docRef = await addDoc(collectionRef, activityData);

    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e; // Re-throw the error so calling code can handle it
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
    throw e; // Re-throw the error so calling code can handle it
  }
}
