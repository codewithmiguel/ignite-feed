import { Avatar } from './Avatar';
import { Commment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {

  // console.log(props)

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/codewithmiguel.png" />
          <div className={styles.authorInfo}>
            <strong>Pedro Miguel</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time
          title='06 de Junho de 2022 às 15h30'
          dateTime="2022-06-06 15:33:00"
        >
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href=""> jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>
          <a href=""> #nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário...'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>

        <Commment />
        <Commment />
        <Commment />
      </div>

    </article>
  )
}