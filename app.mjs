import bcryptjs from "bcryptjs";
import bluebird from "bluebird";
import fsCallback from "fs";
const fs = bluebird.promisifyAll(fsCallback);

const cli_hash = function() {
    const fileStringToHash = process.argv[3];

    if (process.argv[2] === "generate") {
        const saltRounds = Number(process.argv[4]);
        if (Number.isNaN(saltRounds)) {
            console.log(`Salt rounds must be a number`);
            process.exit(1);
        }
        fs.readFileAsync(fileStringToHash, "utf8")
            .then((stringToHash) => {
                return bcryptjs.hash(stringToHash, saltRounds);
            }).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(`Error: ${err}`);
            });
    } else if (process.argv[2] === "compare") {
        const fileHashToCheck = process.argv[4];
        const readStringToHash = fs.readFileAsync(fileStringToHash, "utf8");
        const readHash = fs.readFileAsync(fileHashToCheck, "utf8");
        Promise.all([readStringToHash, readHash])
            .then((resultsRead) => {
                const stringToHash = resultsRead[0];
                const hashToCheck = resultsRead[1];
                return bcryptjs.compare(stringToHash, hashToCheck);
            }).then((result) => {
                if (result) {
                    console.log("✔ String and hash match");
                } else {
                    console.log("✘ String and hash do NOT match");
                }
            }).catch((err) => {
                console.log(`Error: ${err}`);
            });
    } else {
        console.log("The program acceps three arguments:");
        console.log("+ Action to perform (generate or compare hashes)");
        console.log("+ The string to hash");
        console.log("+ Number of rounds used to generate the hashing salt");
        process.exit(1);
    }
}

export default cli_hash;