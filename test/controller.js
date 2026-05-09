const { getUsers, getUsersAsync } = require("./service");

// Promise chain version
function fetchUsersWithPromise() {
    return getUsers()
        .then(users => {
            return users.map(u => ({
                id: u.id,
                name: u.name
            }));
        })
        .catch(err => {
            console.error("Promise Error:", err);
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
        console.error("Async Error:", err);
    }
}

module.exports = {
    fetchUsersWithPromise,
    fetchUsersWithAsync
};