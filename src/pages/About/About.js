import styles from './About.module.css'
import pictureOfMe from '../../assets/img/benjamin-gauvin.webp'
import SvgContainer from '../../components/SvgContainer/SvgContainer'

export default function About(props) {


    return <div  className={props.active ? styles.mainContainer : styles.hidden}>
        <svg className={styles.backArrow}
        onClick={() => props.event()}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <div className={styles.pictureContainer} >
        <img src={pictureOfMe} alt='Benjamin Gauvin' />
        </div>
        <section className={styles.presentation} >
            <h2 className={styles.sectionTitle} >Présentation</h2>
            <div className={styles.separator} ></div>
            <p className={styles.sectionText} ><strong>Développeur passionné</strong> depuis l'enfance, j'ai décidé de me 
                reconvertir dans le domaine du web.<br/>
                Actuellement <strong>développeur web</strong>, je réalise des <strong> solutions web </strong> 
                depuis la conception du projet jusqu'à la mise en ligne du 
                produit final.<br/>
                Spécialisé en JavaScript, ce language me permet de développer 
                sur <strong>tous types de plateformes</strong>.
            </p>
        </section>
        <section className={styles.competences} >
            <h2 className={styles.sectionTitle} >Mes Compétences</h2>
            <div className={styles.separator} ></div>
            <article className={styles.categories}>
                <div className={styles.category1} >
                    <h3>Mon stack :</h3>
                    <SvgContainer active={props.active} />
                </div>
                <div className={styles.category2} >
                    <h3>Mes points forts :</h3>
                    <div className={styles.listContainer} >
                            <span>Capacité d'apprentissage  |</span>
                            <span>Créativité  |</span>
                            <span>Résolution de problèmes  |</span>
                            <span>Travail en équipe  |</span>
                            <span>Gestion de projets agiles  |</span>
                            <span>Autonomie  |</span>
                            <span>Curiosité  |</span>
                            <span>Rigueur  |</span>
                            <span>Communication</span>
                    </div>
                </div>
            </article>
        </section>
    </div>
}