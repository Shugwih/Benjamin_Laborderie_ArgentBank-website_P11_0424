import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './User.module.scss';
import Button from '../../components/Button/';
import UserAccount from '../../components/UserAccount';
import UserAccountData from '../../Data/UserBankAccount.json';
import { fetchUserDetails, updateUserDetails } from '../../Slices/userSlice';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function User() {
    const dispatch = useDispatch();
    const { details, loading, error } = useSelector(state => state.user);
    const { token } = useSelector(state => state.auth);
    const [isModalOpen, setModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (token) {
            dispatch(fetchUserDetails());
        }
    }, [token, dispatch]);

    useEffect(() => {
        document.title = "Argent Bank - User";
    }, []);

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
    
            return () => clearTimeout(timer); 
        }
    }, [successMessage]); 
    

    const formFields = [
        {
            name: 'userName',
            label: 'User Name',
            type: 'text',
            defaultValue: details ? details.userName : '',
        },
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            defaultValue: details ? details.firstName : '',
            readOnly: true,
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            defaultValue: details ? details.lastName : '',
            readOnly: true,
        }
    ];

    const handleSubmit = (formData) => {
        const userData = {
            userName: formData.userName
        };
        dispatch(updateUserDetails(userData))
            .then(() => {
                setModalOpen(false);
                setSuccessMessage('Username successfuly changed...');
            })
            .catch(error => {
            });
    };

    const handleEditClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className='main bg-dark'>
            <div className={styles.header}>
                <h1>Welcome back<br />{details ? `${details.firstName} ${details.lastName}` : ''}</h1>
                <Button onClick={handleEditClick} className="edit-button">
                    Edit Name
                </Button>
                <Modal isOpen={!!successMessage} onClose={() => setSuccessMessage('')} extraOverlayClass="modalOverlayTransparent">
                    <div className={styles.successModalContent}>
                        <span>{successMessage}</span>
                        <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} onClick={() => setSuccessMessage('')} />
                    </div>
                </Modal>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Form
                    key={details ? details.updatedAt : 'initial'}
                    fields={formFields}
                    onSubmit={handleSubmit}
                    onCancel={handleCloseModal}
                    buttonText="Save"
                    title="Edit Your Name"
                    includeCancelButton={true}
                />
            </Modal>
            <h2 className="sr-only">Accounts</h2>
            {UserAccountData.map((account, index) => (
                <UserAccount key={index} account={account} />
            ))}
        </main>
    );
}

export default User;