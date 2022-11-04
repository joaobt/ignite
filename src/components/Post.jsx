import styles from "./Post.module.css";


export function Post() {
  return(
  <article className={styles.Post}>
   <header>
    <div className={styles.author}>
        <img className={styles.avatar} src="https://images.unsplash.com/flagged/photo-1667329002631-dcfa0fea4b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"  />
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

   <p>👉 <a href="https://www.canva.com/pt_br/aprenda/o-que-e-design/">jane.design/doctorcare</a></p> 

   <p><a href="https://github.com/joaobt">#novoprojeto #Github #JB Developer#</a></p>
   </div>
  </article>
  )
}
