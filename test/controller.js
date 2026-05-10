const { getUsers, getUsersAsync } = require("./service");

function fetchUsersWithPromise() {
    return getUsers()
        .then(users => {
            return users.map(u => ({
                id: u.id,
                name: u.name
            }));
        })
        .catch(err => {
            console.error("promise err:", err);
        });
}

async function fetchUsersWithAsync() {
    try {
        const users = await getUsersAsync();
        return users.map(u => ({
            id: u.id,
            name: u.name
        }));
    } catch (err) {
        console.error("async err:", err);
    }
}

module.exports = {
    fetchUsersWithPromise,
    fetchUsersWithAsync
};