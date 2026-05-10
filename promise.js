const apromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve('it works');
    } else {
        reject('error occurred');
    }
});

apromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('🔄 Connection attempt finished.'));