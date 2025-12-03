import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import type { User } from "firebase/auth"; // Correct import for User type
import { useState } from "react";
import { auth } from "../firebase"; // Import the pre-initialized auth instance

interface Params {
    onError?: (error: string) => void;
    onSuccess?: (user: User) => void;
}
const useAuth = (params: Params = {}) => {
    const {onError, onSuccess} = params;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const createUser = async (username: string, password: string, name:string) => {
        setLoading(true); // Move setLoading(true) outside try block
        setError(''); // Clear error before new attempt
        try {
           const userCredential = await createUserWithEmailAndPassword( // Renamed to userCredential
                auth, // Use the imported auth instance
                username,
                password,
            );
            if (auth.currentUser) {
                updateProfile(auth.currentUser!, { // Use auth.currentUser
                    displayName: name,
                });
            }
            setLoading(false);
            if (typeof onSuccess === 'function') {
                onSuccess(userCredential.user); // Pass userCredential.user
            }
        } catch (error: any) {
            setError(error.message);
            if (typeof onError === 'function') {
                onError(error.message);
            }
        } finally { // Ensure setLoading(false) always runs
            setLoading(false);
        }
    };

    const login = async (username: string, password: string) => {
        const auth = getAuth();
        try {
            setLoading(true);
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
             setLoading(false);
             if (typeof onSuccess === 'function') {
                onSuccess(userCredential.user); // Pass userCredential.user
            }
        } catch (error: any) {
            console.error("Logout failed:", error);
            setError(error.message);
            setLoading(false);
             if (typeof onError === 'function') {
                onError(error.message);
            }
        }
    };

    const logout = async() => {
        const auth = getAuth();
        try {
            setLoading(true);
            await signOut(auth);
             setLoading(false);
        } catch (error: any) {
            console.error("Logout failed:", error);
            setError(error.message);
            setLoading(true);
        }
       
    }

    return {
        createUser,
        login,
        logout,
        loading,
        error,
    };
}
export default useAuth;