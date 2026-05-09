const users = require("./users");


function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                reject("No users found");
            } else {
                resolve(users);
            }
        }, 1000);
    });
}

async function getUsersAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!users) {
                reject("No users found");
            } else {
                resolve(users);
            }
        }, 1000);
    });
}

module.exports = {
    getUsers,
    getUsersAsync
};