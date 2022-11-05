import styles from './comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
export function Comment() {
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

                        <button title='Deletar Comentarios'>
                            <Trash size={23} />
                        </button>
                    </header>

                    <p>Muito bom Deven, parabéns!! 👏👏</p>

                </div>

                <footer>
                   <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                   </button>
                </footer>

            </div>
        </div>
    )
}

