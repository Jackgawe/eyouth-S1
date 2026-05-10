const {
    fetchUsersWithPromise,
    fetchUsersWithAsync
} = require("./controller");

async function main() {
    console.log("offline:");
    const data1 = await fetchUsersWithPromise();
    console.log(data1);

    console.log("\noffline (Async/Await):");
    const data2 = await fetchUsersWithAsync();
    console.log(data2);
}

main();