import type { ComponentProps, FC } from 'react';
import styles from './CheckboxInput.module.css';

interface ICheckboxInputProps extends ComponentProps<'input'> {
  label: string;
}

const CheckboxInput: FC<ICheckboxInputProps> = ({ label, ...props }) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" {...props} />
      <label> {label}</label>
    </div>
  );
};

export default CheckboxInput;
