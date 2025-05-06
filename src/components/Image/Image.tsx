import { type ComponentProps, type FC } from 'react';
import styles from './Image.module.css';

const Image: FC<ComponentProps<'img'>> = ({ ...props }) => {
  return <img className={styles.image} {...props} />;
};

export default Image;
