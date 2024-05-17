import React, { useState, useEffect } from 'react';
import styles from './Features.module.scss';
import featuresData from '../../Data/Features.json'; 

function Features() {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <section className={styles.features}>
            <h2 className="sr-only">Features</h2>
            {features.map((feature, index) => (
                <div key={index} className={styles['feature-item']}>
                    <img 
                        src={require(`../../Assets/${feature.images.src}`)}
                        srcSet={`${require(`../../Assets/${feature.images.src}`)} 320w, ${require(`../../Assets/${feature.images.srcSet.split(', ')[1].split(' ')[0]}`)} 600w`}
                        sizes={feature.images.sizes}
                        alt={feature.alt}
                        width={feature.images.width}
                        height={feature.images.height}
                        className={styles['feature-icon']}
                    />
                    <h3 className={styles['feature-item-title']}>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;
