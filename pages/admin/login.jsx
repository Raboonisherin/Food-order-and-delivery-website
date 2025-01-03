import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await axios.post("/api/login", {
        username,
        password,
      });
      if (response.status === 200) {
        router.push("/admin");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      console.error("Login Error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
