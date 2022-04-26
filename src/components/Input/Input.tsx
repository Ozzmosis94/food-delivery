import React, { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  aditionalIcon?: FC<React.SVGProps<SVGSVGElement>>;
  onShowPass?: () => void;
}

const Input: FC<IProps> = ({ aditionalIcon: AditionalIcon, onShowPass, ...props }) => {
  return (
    <div className={styles.main}>
      <input className={styles.input} {...props} />
      {AditionalIcon ? (
        <AditionalIcon className={styles.icon} onClick={onShowPass} />
      ) : null}
    </div>
  );
};

export default Input;
