"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function print(object) {
    console.log(object);
}
function main(directory) {
    const directories = (0, utils_1.listDirectoriesSync)(directory);
    if (directories.length < 1) {
        print('there should be at least two directories...');
    }
    else {
        const firstTwoDirectories = directories.slice(0, 2);
        print(`Comparing <${firstTwoDirectories[0]}> and <${firstTwoDirectories[1]}>...`);
        (0, utils_1.compareTwoDirectories)(firstTwoDirectories[0], firstTwoDirectories[1]);
    }
}
main("H:/Typescript/see");
