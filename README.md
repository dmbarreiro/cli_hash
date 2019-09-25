# CLI Hash

CLI tool wrapping [bcryptjs](https://www.npmjs.com/package/bcryptjs) that generates a salted hash from input file or compares input file with provided hash. When generating the hash you can select the number of rounds to generate the hash salt. When comparing instead of the salt rounds introduce the file containing the hash.

Useful for testing if you bcryptjs in your project and for comparing strings and hashes (sensitive data) without sharing them with online tools.

#### Install

With `npm` installed type:

```
npm install --global cli_hash
```

#### Execute:

To hash:

```
cli_hash generate -i <path-to-file> [-s <salt-generation-rounds>] [-o <path-to-output-file>]
```

To compare:

```
cli_hash compare -i <path-to-file> -c <path-to-file-containing-hash>
```

#### Examples

The repository contains test files under `test/` that you can use to check the behavior.

##### 1. Generate hash from string

```
cli_hash generate -i test/string-to-hash.txt -s 12
```

Hashes string contained in `test/string-to-hash.txt` using `12` rounds to generate the hashing salt. The generated hash will be printed in the console. This is equivalent to

```
cli_hash generate -i test/string-to-hash.txt -s 12
```

since `12` is the default value for salt length.

If you want to store the hash in a file instead of printing it to console you can do that specifying the output file with `-o`

```
cli_hash generate -i test/string-to-hash.txt -o test/output_hash.txt
```

##### 2. Compare string to hash

```
cli_hash compare -i test/string-to-hash.txt -c test/hash-to-check.txt
```

Checks string contained in `test/string-to-hash.txt` matches hash contained in `test/hash-to-check.txt`. The hashes should match and `✔ String and hash match` will be printed in the console.

Check for negative comparison with

```
cli_hash compare -i test/wrong-string-to-hash.txt -c test/hash-to-check.txt
```

`✘ String and hash do NOT match` will be printed in the console.

#### Build Documentation (JSDoc)

```
npm run generate_docs
```

The `html` documentation will be exported to `/docs`.



CLI Hash Generator uses [bcryptjs](https://www.npmjs.com/package/bcryptjs).
