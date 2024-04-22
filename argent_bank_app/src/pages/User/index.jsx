import React, { useEffect } from 'react';
import styles from './User.module.scss';
import Button from '../../components/Button/';
import UserAccount from '../../components/UserAccount';

function User() {

    useEffect(() => {
        document.title = "Argent bank - User";
    }, []);

    const accounts = [
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance"
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance"
        }
    ];

    return (
        <main className='main bg-dark'>
            <div className={styles.header}>
                <h1>Welcome back<br />{/* Nom Dynamique ici */}</h1>
                <Button to="/" className="edit-button">
                    Edit Name
                </Button>

            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <UserAccount key={index} account={account} />
            ))}
        </main>
    );
}

export default User;
