import React, { FC, InputHTMLAttributes } from "react";
import Input from "../Input/Input";

import styles from "./InputForm.module.scss";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  className: string,
  aditionalIcon?: FC<React.SVGProps<SVGSVGElement>>,
  onShowPass?: () => void,
}

const InputForm: FC<InputFormProps> = ({
  label,
  className,
  onShowPass,
  aditionalIcon,
  ...options
}) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <label className={styles.label}>{label}</label>
      <Input
        onShowPass={onShowPass}
        aditionalIcon={aditionalIcon}
        {...options}
      />
    </div>
  );
};

export default InputForm;
