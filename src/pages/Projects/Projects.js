import styles from './Projects.module.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import kasaImg from '../../assets/img/kasa.webp'
import bookiImg from '../../assets/img/booki.webp'
import ninaImg from '../../assets/img/ninacarducci.webp'
import ohmyfoodImg from '../../assets/img/ohmyfood.webp'
import curtain from '../../assets/img/curtain.webp'


export default function Projects(props) {
    return <div className={props.active ? styles.mainContainer : styles.hidden} >
        <svg className={styles.backArrow}
        onClick={() => props.event()}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        <h2 className={styles.pageTitle}>Mes Projets</h2>
        <section className={styles.projectsContainer} >
            <img src={curtain} alt='curtain' className={styles.curtain} />
            <ProjectCard img={kasaImg} 
            imgAlt='site kasa'
            title="Kasa"
            link="https://monsieurlek.github.io/kasa/"
            repoGithub="https://github.com/MonsieurLeK/kasa"
            context="Créer une application web de location immobilière avec React"
            description="Le site de Kasa est un site de réservation immobilière qui 
            a été codé il y a maintenant plus de 10 ans en ASP.NET. Il m'a été demandé
            pour ce projet de recoder entièrement le site avec des langages plus modernes (React pour
            le front-end et NodeJs pour le back-end.)" />
            <ProjectCard img={ohmyfoodImg}
            imgAlt='site ohmyfood'
            title="Ohmyfood"
            link="https://monsieurlek.github.io/Ohmyfood/"
            repoGithub="https://github.com/MonsieurLeK/Ohmyfood"
            context="Améliorer de l'interface d'un site mobile avec des animations CSS"
            description="Ohmyfood est un site répertoriant des menus de restaurants 
            gastronomiques. J'ai réalisé pour ce projet le développement d'un site 
            en suivant la charte graphique ainsi que les animations de la maquette donnée." />
            <ProjectCard img={ninaImg} 
            imgAlt='portfolio Nina Carducci' 
            title="Nina Carducci - Portfolio"
            link="https://monsieurlek.github.io/ninacarducci/"
            repoGithub="https://github.com/MonsieurLeK/ninacarducci"
            context="Optimiser le référencement d'un site de photographe"
            description="Dans ce projet, j'ai été amené à optimiser les performances
            ainsi que le référencement du site vitrine de Nina, photographe. 
            De l'optimisation du code, 
            des images et de la sémantique jusqu'au référencement sur google, en passant par
            le référencement local et sur les réseaux socieaux."/>
            <ProjectCard img={bookiImg} 
            imgAlt='site booki'
            title="Booki"
            link="https://monsieurlek.github.io/booki/"
            repoGithub="https://github.com/MonsieurLeK/booki"
            context="Créer la page d'accueil d'une agence de voyage"
            description="Booki est un site de réservation d'hôtel en ligne.
            Un de mes premiers projets, il m'a permis de grandement m'améliorer
            sur la conception d'interfaces utilisateurs ainsi que le responsive.
            Il m'a également permis de me familiariser avec des outils de design
            tel que Figma. " />
        </section>
    </div>
}