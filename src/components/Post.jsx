import { Avatar } from "./Avatar";
import { Comment } from "./comment";
import styles from "./Post.module.css";
import moment from 'moment'


export function Post({ author, publishedAt, content }) {

  const publishedDateFormatted = moment().calendar();  




  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>

            <Avatar src={author.AvatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="11 de Novembro ás 20:41" dateTime="2022-10-20:54:20">
        {publishedDateFormatted}
        </time>


      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line === 'paragraph') {
            return <p>{line.content}</p>;

          }else if(line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>;
          }
        })}

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


