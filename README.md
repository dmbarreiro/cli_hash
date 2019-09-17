# CLI Hash Generator

Generates a salted hash from the string provided as argument using the provided number of rounds to generate the hash salt.

#### Install

You need `node` and `npm` so make sure you install them beforehand.
CLI Hash Generator is an npm project therefore to install it you just have to enter the folder containing `package.json` file and execute `npm install`.

#### Execute:

```
npm start -- <string-to-hash> <salt-generation-rounds>
```

Example:

```
npm start -- test 12
```

Hashes string `test` using `12` rounds to generate the hashing salt.

CLI Hash Generator uses [bcryptjs](https://www.npmjs.com/package/bcryptjs).
