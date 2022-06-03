import styles from './Header.module.css';
import IgniteLogo from '../images/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}