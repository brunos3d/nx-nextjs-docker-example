import { TextFromMyLib } from '@nx-nextjs-docker-example/mylib';

import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome withlib 👋
            </h1>
          </div>

          <TextFromMyLib>
            <h2>Hello from WithLib App</h2>
          </TextFromMyLib>
        </div>
      </div>
    </div>
  );
}

export default Index;
