import styles from "./Avatar.module.css"

export function Avatar(props) {
    return(
        <img className={styles.Avatar} src={props.src}
        /> 
      )
  }
       
       