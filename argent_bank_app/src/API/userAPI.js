export const fetchUserProfile = async (token) => {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Unable to fetch user details');
    }

    const data = await response.json();
    return data;
};

export const updateUserProfile = async (token, userData) => {
    const bodyPayload = {
        userName: userData.userName
    };

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyPayload)
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || 'Unable to update user details');
    }

    const data = await response.json();
    return data;
};