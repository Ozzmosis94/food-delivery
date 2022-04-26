import React, { useState } from "react";

import styles from "./Auth.module.scss";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as EyeIcon } from "../../images/eye.svg";
import InputForm from "../InputForm/InputForm";

interface IForm {
    email: string,
    password: string
}

enum Season { Winter, Spring, Summer, Autumn }

console.log(Season.Winter)

const Auth = () => {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState<IForm>({ email: "", password: "" });

  return (
    <div className={`${styles.main} inner`}>
      <Logo className={styles.logo} />
      <h1 className={styles.title}>Login</h1>
      <p className={styles.description}>
        Sign in with your data that you entered during your registration.
      </p>
      <InputForm
        className={styles.input}
        label="Email"
        placeholder="name@example.com"
        name="email"
        type="text"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <InputForm
        className={styles.input}
        aditionalIcon={EyeIcon}
        label="Password"
        placeholder="min. 8 characters"
        name="password"
        type={showPass ? "text" : "password"}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        onShowPass={() => setShowPass(!showPass)}
      />
    </div>
  );
};

export default Auth;
