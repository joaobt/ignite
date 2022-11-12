import { Avatar } from "./Avatar";
import { Comment } from "./comment";
import styles from "./Post.module.css";
import moment from 'moment'
import { useState } from "react";



//stado = varáveis que eu quero que o components monitire.

export function Post({ author, publishedAt, content }) {

  const [comments, setCommments] = useState([

    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = moment().calendar();

  function handleCreateNewComment() {
    event.preventDefault()
    //imutabilidade  return o formulario

    setCommments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(){
    event.target.setCommments('Esse campo é obrigatorio');
  }

  function deleteComment(commentstoDelete) {
   const commentsWithoutDeletedOne = comments.filter(comment => {
    return comments == ! commentstoDelete;
   })

   setCommments(commentsWithoutDeletedOne);
  }


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
          if (line === 'paragraph') {
            return <p>{line.content}</p>;

          } else if (line.type === 'link') {
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


      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe Seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um Comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
        {comments.map(comments => {
          return(
          <Comment  
          key={comments}
          content={comments} 
          onDeleteComment={deleteComment}
          />
          ) 
        })}
      </div>
    </article>
  )
}
    
    













