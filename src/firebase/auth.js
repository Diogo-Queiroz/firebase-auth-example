import { auth } from "./firebase"

// Sign Up Function
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)

// Sign In Function
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)

// Sign Out Function
export const doSignOut = () => auth.signOut()

// Password Reset Function
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email)

// Password Change Function
export const doPasswordChange = (password) =>
  auth.currentUser.updatePassword(password)