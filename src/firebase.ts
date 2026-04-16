import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

function requireEnv(name: keyof ImportMetaEnv): string {
  const value = import.meta.env[name];
  if (value === undefined || value === "") {
    throw new Error(
      `Missing ${String(name)}. Copy .env.example to .env and set your Firebase web app values.`,
    );
  }
  return value;
}

const firebaseConfig = {
  apiKey: requireEnv("VITE_FIREBASE_API_KEY"),
  authDomain: requireEnv("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: requireEnv("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: requireEnv("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: requireEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: requireEnv("VITE_FIREBASE_APP_ID"),
  measurementId: requireEnv("VITE_FIREBASE_MEASUREMENT_ID"),
};

export const app = initializeApp(firebaseConfig);

void isSupported().then((supported) => {
  if (supported) getAnalytics(app);
});
