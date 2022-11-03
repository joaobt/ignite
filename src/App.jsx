import { Header } from "./components/Header";
import { Post } from './components/Post';
import { SiderBar } from "./components/SiderBar";

import styles from './App.module.css';
import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SiderBar/>
        <main>
          <Post
            author="João Batista"
            content=" lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi in consequuntur eligendi fugiat. Deleniti, optio animi quisquam vel placeat tempora, quaerat nisi laboriosam magni pariatur dicta quis, distinctio totam accusamus."
          />
          <Post
            author="Maria Eduarda"
            content="Miriam Silva "
          />
        </main>
      </div>
    </div>
  );
}




