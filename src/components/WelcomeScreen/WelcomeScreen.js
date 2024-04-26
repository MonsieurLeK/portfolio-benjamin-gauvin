import styles from './WelcomeScreen.module.css'
import { TypeAnimation } from 'react-type-animation'

export default function WelcomeScreen() {
    return <div className={styles.mainContainer} >
        <TypeAnimation
        className={styles.text}
            sequence={[
                `GAUVIN Benjamin`,
                1000,
                `GAUVIN Benjamin\nDéveloppeur Web`,
                200,
            ]}
            speed={40}
            style={{whiteSpace: 'pre-line', 
            fontSize: '4rem', 
            color: "white",
            }}
            repeat={0} />
    </div>
}