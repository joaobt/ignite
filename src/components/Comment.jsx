import styles from './comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        //setLikeCount(likeCount +1)
        setLikeCount((state) => {
            return state + 1
        });
    }
    return (
        <div className={styles.Comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/2254731?v=4" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Novembro ás 20:41" dateTime="2022-10-20:54:20">1 hora a tras</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentarios'>
                            <Trash size={23} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                   <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                   </button>
                </footer>

            </div>
        </div>
    )
}

    

