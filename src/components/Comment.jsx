import styles from './comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
export function Comment() {
    return (
        <div className={styles.Comment}>
            <img src="https://media.istockphoto.com/id/1368808461/photo/young-woman-feeding-fish-on-tropical-beach.jpg?b=1&s=170667a&w=0&k=20&c=BGamIs-9oD9B4Q-REmHLfkezawyg1dB96dmMj-0h3Hc=" />

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

