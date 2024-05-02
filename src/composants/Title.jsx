import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function TitleTemplate(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start("apres");
        }
    }, [isInView]);

    return (
        <div className='titleTemplate' ref={ref}>
            <motion.div
                variants={{
                    avant: { opacity: 0, x: 200 },
                    apres: { opacity: 1, x: 0 },
                }}
                initial={"avant"}
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.h2
                    variants={{
                        avant: { opacity: 0 },
                        apres: { opacity: 1 },
                    }}
                    initial={"avant"}
                    animate={mainControl}
                    transition={{ duration: 0.5, delay: 0.5 }} // Délai plus long pour commencer après le déplacement
                >
                    {props.title}
                </motion.h2>
            </motion.div>
        </div>
    );
}
