import bcryptjs from "bcryptjs";
import bluebird from "bluebird";
import fsCallback from "fs";
const fs = bluebird.promisifyAll(fsCallback);

const cli_hash_generate = function(fileStringToHash, saltLength, outputFile) {
    if (Number.isNaN(saltLength)) {
        console.log(`Salt length must be a number`);
        process.exit(1);
    }
    fs.readFileAsync(fileStringToHash, "utf8")
        .then((stringToHash) => {
            return bcryptjs.hash(stringToHash, saltLength);
        }).then((result) => {
            if (outputFile) {
                return fs.writeFileAsync(outputFile, result, { encoding: "utf8" });
            } else {
                console.log(result);
            }
        }).then(() => {
            // Then block always reached even when no outputFile is specified
            if (outputFile) {
                console.log('Hash successfully stored in', outputFile);
            }
        }).catch((err) => {
            console.log(`Error: ${err}`);
        });
}

const cli_hash_compare = function(fileStringToHash, fileHashToCheck) {
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
}

export { cli_hash_generate, cli_hash_compare };