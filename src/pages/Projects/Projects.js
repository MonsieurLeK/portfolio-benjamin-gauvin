import styles from './Projects.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import kasaImg from '../../assets/img/kasa.webp'
import bookiImg from '../../assets/img/booki.webp'
import ninaImg from '../../assets/img/ninacarducci.webp'
import ohmyfoodImg from '../../assets/img/ohmyfood.webp'


export default function Projects(props) {
    return <div className={props.active ? styles.mainContainer : styles.hidden} >
        <svg className={styles.backArrow}
        onClick={() => props.event()}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <h2 className={styles.pageTitle}>Menu</h2>
        <section className={styles.projectsContainer} >
            <ProjectCard img={kasaImg} 
            imgAlt='site kasa'
            title="Kasa"
            context="Créer une application web de location immobilière avec React"
            description="Le site de Kasa est un site de réservation immobilière qui 
            a été codé il y a maintenant plus de 10 ans en ASP.NET. Il m'a été demandé
            pour ce projet de recoder entièrement le site avec des langages plus modernes (React pour
            le front-end et NodeJs pour le back-end." />
            <ProjectCard img={ohmyfoodImg} 
            imgAlt='site ohmyfood'
            title="Ohmyfood"
            context="Améliorer de l'interface d'un site mobile avec des animations CSS" />
            <ProjectCard img={ninaImg} 
            imgAlt='portfolio Nina Carducci' 
            title="Nina Carducci - Portfolio"
            context="Optimiser le référencement d'un site de photographe"
            description="test"/>
            <ProjectCard img={bookiImg} 
            imgAlt='site booki'
            title="Booki"
            context="Créer la page d'accueil d'une agence de voyage" />
        </section>
    </div>
}