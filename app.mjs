import bcryptjs from "bcryptjs";

if (process.argv.length !== 4) {
    console.log('The program acceps to arguments:')
    console.log('+ The string to hash');
    console.log('+ Number of rounds used to generate the hashing salt');
    process.exit(1);
}

const stringToHash = process.argv[2];
const saltRounds = Number(process.argv[3]);

if (Number.isNaN(saltRounds)) {
    console.log(`Salt rounds must be a number`);
    process.exit(1);
}
bcryptjs.hash(stringToHash, saltRounds)
    .then((hash) => {
        console.log(hash);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });