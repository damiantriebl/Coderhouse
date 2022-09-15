import * as dotenv from 'dotenv'
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
dotenv.config()
initializeApp({
  credential: applicationDefault()
});

class dbFirebase {
  constructor(coleccion){
    this.db = getFirestore().collection(coleccion);    
  }
}

export {dbFirebase}