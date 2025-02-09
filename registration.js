import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const registerUser = async (fullName, passportID, username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      fullName,
      passportID,
      username,
      email,
    });

    console.log('User registered successfully!');
    return user;
  } catch (error) {
    console.error('Error during user registration:', error.message);
    throw error; 
  }
};

export default registerUser;