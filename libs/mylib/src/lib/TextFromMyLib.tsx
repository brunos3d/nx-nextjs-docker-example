import { ReactNode } from 'react';
import styles from './TextFromMyLib.module.css';

export interface TextFromMyLibProps {
  children?: ReactNode;
}

export function TextFromMyLib({ children }: TextFromMyLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Message from TextFromMyLib component!</h1>
      {children}
    </div>
  );
}

export default TextFromMyLib;
