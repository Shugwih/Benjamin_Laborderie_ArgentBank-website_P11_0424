import React from 'react';
import styles from './UserAccount.module.scss';
import Button from '../../components/Button/';

function UserAccount({ account }) {
    return (
        <section className={styles.account}>
            <div className={styles["account-content-wrapper"]}>
                <h3 className={styles["account-title"]}>{account.title}</h3>
                <p className={styles["account-amount"]}>{account.amount}</p>
                <p className={styles["account-amount-description"]}>{account.description}</p>
            </div>
            <div className={styles["account-content-wrapper"] + " " + styles.cta}>
                <Button className='transaction-button'>
                    View transactions
                </Button>
            </div>
        </section>
    );
}

export default UserAccount;
