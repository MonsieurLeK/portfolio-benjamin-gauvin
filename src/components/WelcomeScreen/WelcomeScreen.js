import styles from './WelcomeScreen.module.css'
import { TypeAnimation } from 'react-type-animation'

export default function WelcomeScreen() {
    return <div className={styles.mainContainer} >
        <TypeAnimation
        className={styles.text}
            sequence={[
                `GAUVIN Benjamin\nDéveloppeur Web`,
                200,
            ]}
            speed={60}
            style={{whiteSpace: 'pre-line', 
            color: "white",
            }}
            repeat={0} />
    </div>
}