import styles from "./index.module.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // Add this import

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const nav = useNavigate(); // Initialize useNavigate

    // Get createUser, loading, and error from the useAuth hook
    // Pass onSuccess and onError callbacks to handle navigation and display errors
    const { createUser, loading, error } = useAuth({
        onSuccess: () => {
            nav("/login");
        },
        onError: (errMessage) => {
            // The error state is already set inside useAuth.
            // You can log it here if you want to see it in console.
            console.error("Signup failed:", errMessage);
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // setError(""); // No longer needed, useAuth handles its own error state
        await createUser(username, password, name);
    }
    return (
        <div className={styles.container}>
            <div className={styles.SignupCard}>
                <div className={styles.logoWrapper}>
                    <h1 className={styles.logo}>Disney+</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <div className={styles.inputGroup}>
                        <input 
                            required
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Email or Username" 
                            className={styles.input}
                        />
                        <input 
                            required
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Username" 
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            required 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" 
                            className={styles.input}
                        />
                    </div>
                    <button type="submit" className={styles.SignupButton} disabled={loading}>{loading ? "Loading..." : "Sign Up"}</button>
                </form>
                <div className={styles.divider}>
                    <span>New to Disney+?</span>
                </div>
                <button type="button" className={styles.SignupButton}>Sign Up</button>
                {
                    error && (
                        <span>{error}</span>
                    )
                    
                }
            </div>
        </div>
    )
}

export default Signup;