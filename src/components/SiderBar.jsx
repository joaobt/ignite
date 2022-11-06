import styles from "./SiderBar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function SiderBar() {
  return (
    <aside className={styles.SiderBar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1667202374078-1683eda6b0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar  src='https://avatars.githubusercontent.com/Iago' />
        <strong>JB Paula filho</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Seu Perfil
        </a>
      </footer>
    </aside>
  );
}
