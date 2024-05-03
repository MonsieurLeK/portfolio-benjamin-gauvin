import styles from './ProjectCard.module.css'


export default function ProjectCard(props) {
    return <article className={styles.cardContainer} >
        <div className={styles.imgContainer} >
        <img loading='lazy' src={props.img} alt={props.imgAlt} />
        </div>
        <div className={styles.separator} ></div>
        <div className={styles.textContainer} >
        <h3 className={styles.projectTitle} >{props.title}</h3>
        <span >
        <h4>Contexte:</h4>
        <p>{props.context}</p>
        </span>
        <span className={styles.descriptionContainer} >
        <p className={styles.projectDescription} >{props.description}</p>
        </span>
        </div>
    </article>
}