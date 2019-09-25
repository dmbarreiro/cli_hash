#! /usr/bin/env node --experimental-modules --no-warnings

import yargs from 'yargs';

import { cli_hash_generate, cli_hash_compare } from '../app.mjs';

const argv = yargs
    .command('generate', 'Generates bcryptjs hash from file content using salt', (yargs) => {
        return yargs.option('s', {
            alias: 'salt',
            default: 12,
            describe: 'Salt length',
            type: 'number'
        }).option('o', {
            alias: 'output',
            describe: 'Output file',
            type: 'string'
        });
    }, (argv) => {
        if (argv.output) {
            cli_hash_generate(argv.input_file, argv.salt, argv.output);
        } else {
            cli_hash_generate(argv.input_file, argv.salt);
        }
    })
    .command('compare', 'Compares file content with hash contained in file', (yargs) => {
        return yargs.option('c', {
            alias: 'hash_file',
            describe: 'Hash file to load',
            demandOption: true,
            type: 'string'
        });
    }, (argv) => {
        cli_hash_compare(argv.input_file, argv.hash_file);
    })
    .example('$0 generate -i my_file.txt -s 10', 'Generates hash from content of my_file.txt a salt of length 10')
    .example('$0 compare -i my_file.txt -c hash_file.txt', 'Compares hash of my_file.txt contents with hash contained in hash_file.txt')
    .option('i', {
        alias: 'input_file',
        demandOption: true,
        describe: 'File to load',
        type: 'string',
        nargs: 1
    })
    .help('h')
    .alias('h', 'help')
    .version()
    .alias('v', 'version')
    .argv
