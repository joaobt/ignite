import { Header } from "./components/Header";
import { Post } from './components/Post';
import { SiderBar } from "./components/SiderBar";

import styles from './App.module.css';
import './global.css'


// author
// {avatar_url: "", name:"", role:""}
//publishedAt; Date
// content: String

const Posts = [
  {
    id: 1,
    author: {
      Avatar: "https://avatars.githubusercontent.com/u/6692103?v=4",
      name: "Iago carvalho",
      role: "Dev web",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},
      { type: 'Link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-11 08:21:02')
   },

   {
    id: 2,
    author: {
      Avatar: "https://avatars.githubusercontent.com/maykbrito",
      name: "maykbrito",
      role: "Dev1 web",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀'},
      { type: 'Link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-09 08:21:02')
   },
];

//iteração

export function App() {

  return (
    <div>
      <Header />


      <div className={styles.wrapper}>
        <SiderBar />
        <main>
             {Posts.map(post => {
              return (
              <Post 
               author={post.author}
               content={post.content}
               publishedat={post.publishedAt}
              />)
             })}
        </main>

      </div>
    </div>
  );
}




      
      
     
       
      
       
      








