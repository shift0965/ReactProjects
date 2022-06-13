import { motion } from "framer-motion"
import { Button, ColumnLeft, ColumnRight, Container, Img, Section, } from "./Styles/Hero.styled"

export default function Hero() {

    const imgs = [
        './images/ball1.svg',
        './images/ball2.svg',
        './images/ball3.svg'
    ]

    const pAni= {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0}
    }

    return(
        <Section>   
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        Welcome to animation page
                    </motion.h1>
                    <motion.p
                        variants={pAni}
                        initial='hidden'
                        animate='visible'
                        transition={{duration : 1}}
                        >
                        Journey to the unknown
                    </motion.p>
                    <Button 
                        as={motion.button}
                        whileHover={{scale:1.05}}
                        
                        whileTap={{
                            scale:0.95, 
                            background:'skyblue',
                            border: 'none'
                        }}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition :{duration: 1.5}}}   
                    
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Img src={imgs[0]}
                        as={motion.img}
                        whileHover={{scale:1.3}}
                        whileTap={{scale:1}}
                        drag={true}
                        dragConstraints={{left: -50, right: 0, top:0, bottom: 200}}
                        initial={{x:100, y:-100, opacity:0}}
                        animate={{x:0, y:0, opacity:1, transition: {duration: 1}}}

                        
                    />
                    <Img src={imgs[1]}
                        as={motion.img}
                        whileHover={{scale:1.4}}
                        whileTap={{scale:1.2}}
                        drag={true}
                        dragConstraints={{left: 0, right: 0, top:0, bottom:0}}
                        initial={{x:200, opacity:0}}
                        animate={{x:0, opacity:1, transition: {duration: 1}}}
                        
                    />

                    <Img src={imgs[2]}
                        as={motion.img}
                        whileHover={{scale:1.2}}
                        whileTap={{scale:1.0}}
                        dragConstraints={{left: 0, right: 200, top:0, bottom:200}}
                        drag={true}
                        initial={{x:-200, y:-100, opacity:0}}
                        animate={{x:0, y:0, opacity:1, transition: {duration: 1}}}
                    />

                </ColumnRight>
            </Container>          
        </Section>
    )
}