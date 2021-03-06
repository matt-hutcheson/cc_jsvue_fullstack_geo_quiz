const baseURL = 'api/';

export default {
    // getUsers() {
    //     return fetch(baseURL)
    //     .then(res => res.json());
    // },

    addUser(user) {
        return fetch(baseURL + "register", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    loginUser(login) {
        return fetch(baseURL + "login", {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },

    updateUser(user, token) {
        return fetch(baseURL + "me/update", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        })
        .then(res => res.json());
    },

    updateUserResults(user, token) {
        return fetch(baseURL + "me/update/results", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        }).then(res => res.json());
    },

    getUserDetails(token) {
        return fetch(baseURL + "me", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        }).then(res => res.json());
    },

    refreshToken(refreshToken){
        return fetch(baseURL + "me/token", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + refreshToken
            }
        }).then(res => res.json());
    },

    logoutUser(user, token){
        return fetch(baseURL + "me/logout", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " +  token
            }
        }).then(res => res.json());
    },

    deleteUser(_id, token) {
        return fetch(baseURL + "me/delete", {
            method: 'POST',
            body: JSON.stringify({_id: _id}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
        }).then(res => res.json());
    }
};
