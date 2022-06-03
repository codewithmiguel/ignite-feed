import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react'
export function SideBar() {

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/codewithmiguel.png" />

        <strong>Pedro Miguel</strong>
        <span>Frontend Engineer</span>
      </div>
      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}