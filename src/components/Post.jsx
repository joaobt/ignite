import { Avatar } from "./Avatar";
import { Comment } from "./comment";
import styles from "./Post.module.css";



export function Post(props) {

  console.log(props);

  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/maykbrito" />
          <div className={styles.authorInfo}>
            <strong>Maria Eduarda</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Novembro ás 20:41" dateTime="2022-10-20:54:20">Publicado a 1h</time>


      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="https://www.canva.com/pt_br/aprenda/o-que-e-design/">
          jane.design/doctorcare
        </a>
        </p>

        <p>
          <a> novoprojeto</a>
          <a href="https://github.com/joaobt"> Github </a>
          <a>JB Developer</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe Seu feedback</strong>

        <textarea
         placeholder="Deixe um Comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
        
      </form>

      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />
      </div>
    </article>
  )
}


