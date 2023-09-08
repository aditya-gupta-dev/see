"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDirectoriesSync = exports.compareTwoDirectories = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const messages_1 = require("./messages");
function getBaseNameOfAllFiles(files) {
    const basenames = [];
    for (let i = 0; i < files.length; i++) {
        basenames.push(path_1.default.basename(files[i]));
    }
    return basenames;
}
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs_1.default.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        const filePath = path_1.default.join(dirPath, file);
        if (fs_1.default.statSync(filePath).isDirectory()) {
            arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
        }
        else {
            arrayOfFiles.push(filePath);
        }
    });
    return arrayOfFiles;
}
function compareTwoDirectories(first, second) {
    return __awaiter(this, void 0, void 0, function* () {
        const firstFiles = getAllFiles(first, []);
        const secondFiles = getAllFiles(second, []);
        if (firstFiles.length !== secondFiles.length) {
            console.log(messages_1.messages.numberOfFilesNotEqual(firstFiles.length, secondFiles.length));
        }
        else {
            console.log(messages_1.messages.numberOfFilesEqual(firstFiles.length));
            const firstBasenames = getBaseNameOfAllFiles(firstFiles);
            const secondBasenames = getBaseNameOfAllFiles(secondFiles);
            console.log("Sorting files in first directory...");
            const sortedFilesFirst = firstBasenames.sort();
            console.log("Sorting files in second directory...");
            const sortedFilesSecond = secondBasenames.sort();
            for (let i = 0; i < sortedFilesFirst.length; i++) {
                if (sortedFilesFirst[i] !== sortedFilesSecond[i]) {
                    // TODO: 
                }
            }
        }
    });
}
exports.compareTwoDirectories = compareTwoDirectories;
function listDirectoriesSync(dirPath) {
    const directories = [];
    const entities = fs_1.default.readdirSync(dirPath);
    entities.forEach((entity) => {
        const absolutePath = path_1.default.join(dirPath, entity);
        if (fs_1.default.statSync(absolutePath).isDirectory()) {
            directories.push(absolutePath);
        }
    });
    return directories;
}
exports.listDirectoriesSync = listDirectoriesSync;
