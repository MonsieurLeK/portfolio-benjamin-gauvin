import styles from './ProjectCard.module.css'
import externalLinkSVG from '../../assets/img/external-link.svg'
import githubSVG from '../../assets/img/github.svg'


export default function ProjectCard(props) {
    return <article className={styles.cardContainer} >
        <div className={styles.imgContainer} >
        <img loading='lazy' src={props.img} alt={props.imgAlt} />
        <div className={styles.linkModal} >
            <a href={props.link} target='_blank' rel='noreferrer' 
            className={props.link ? styles.projectLink : styles.displayNone} >
                <img src={externalLinkSVG} loading='lazy' alt='lien externe' />
                Lien vers le site en ligne
            </a>
            <a href={props.repoGithub} target='_blank' rel='noreferrer' 
            className={props.repoGithub ? styles.projectLink : styles.displayNone} >
                <img src={githubSVG} loading='lazy' alt='lien repo github' />
                Lien vers le repo Github
            </a>
        </div>
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