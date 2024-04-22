import React, { useEffect } from 'react';
import styles from './Home.module.scss';

import Banner from '../../components/Banner/'
import Features from '../../components/Features/';

function Home() {

    useEffect(() => {
        document.title = "Argent bank - Home Page";
    }, []);

    return (
        <div className={styles.home}>
            <main>
                <Banner />
                <Features />
            </main>
           
        </div>
    )
}

export default Home