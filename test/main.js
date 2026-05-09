const {
    fetchUsersWithPromise,
    fetchUsersWithAsync
} = require("./controller");

async function main() {
    console.log("Offline Promise Fetch:");
    const data1 = await fetchUsersWithPromise();
    console.log(data1);

    console.log("\nOffline Async/Await Fetch:");
    const data2 = await fetchUsersWithAsync();
    console.log(data2);
}

main();