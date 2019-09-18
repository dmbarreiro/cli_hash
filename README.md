# CLI Hash Generator

Generates a salted hash from input file using selected number of rounds to generate the hash salt. If another input file containing a hash is provided it will check if the provided hash matches the other input string.

#### Install

You need `node` and `npm` so make sure you install them beforehand.
CLI Hash Generator is an npm project therefore to install it you just have to enter the folder containing `package.json` file and execute `npm install`.

#### Execute:

To hash:

```
npm start -- generate <path-to-file> <salt-generation-rounds>
```

To compare:

```
npm start -- compare <path-to-file> <salt-generation-rounds> <path-to-file-containing-hash>
```

#### Examples

The repository contains test files under `test/` that you can use to check the behavior.

##### 1. Generate hash from string

```
npm start -- generate test/string-to-hash.txt 12
```

Hashes string contained in `test/string-to-hash.txt` using `12` rounds to generate the hashing salt. The generated hash will be printed in the console.

##### 2. Compare string to hash

```
npm start -- compare test/string-to-hash.txt test/hash-to-check.txt
```

Checks string contained in `test/string-to-hash.txt` matches hash contained in `test/hash-to-check.txt`. The hashes should match and `✔ String and hash match` will be printed in the console.

Check for negative comparison with

```
npm start -- compare test/wrong-string-to-hash.txt test/hash-to-check.txt
```

`✘ String and hash do NOT match` will be printed in the console.

CLI Hash Generator uses [bcryptjs](https://www.npmjs.com/package/bcryptjs).
