"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function main(directory) {
    (0, utils_1.listDirectories)(directory)
        .map((val) => console.log(val));
}
main(".");
