import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import styles from "./BaseLayout.module.css";
type BaseLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <>
      <header>
        <div>
          <h2 className={styles.h2}>
            {title}
            <img
              src={reactLogo}
              alt="React Logo"
              style={{
                animation: `${styles.spin} infinite 12s linear`,
              }}
            />
          </h2>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        Designed with <Link to="https://picocss.com/">Pico.css</Link>
      </footer>
    </>
  );
};
