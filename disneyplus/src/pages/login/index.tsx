import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./index.module.css";
import { use, useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const {login,  loading, error} = useAuth({
        onSuccess: () => {
            Navigate("/");
        },
        onError: (errMessage) => {
            // The error state is already set inside useAuth.
            // You can log it here if you want to see it in console.
            console.error("Login failed:", errMessage);
        }
    });
    const handleSubmit =  async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
    }
    return (
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.logoWrapper}>
                    <h1 className={styles.logo}>Disney+</h1>
                </div>
                <form onSubmit={handleSubmit} className={styles.formWrapper}>
                    <div className={styles.inputGroup}>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Email or Username" 
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" 
                            className={styles.input}
                        />
                    </div>
                    <button type="submit" className={styles.loginButton}>{loading ? "Loading..." : "login"}</button>
                    <Link to="/signup" className={styles.forgotPassword}>Sign Up</Link>
                </form>
                <div className={styles.divider}>
                    <span>New to Disney+?</span>
                </div>
                <button type="button" className={styles.signupButton}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login;