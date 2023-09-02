"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDirectories = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function listDirectories(dirPath) {
    const directories = [];
    fs_1.default.readdir(dirPath, (err, files) => {
        if (err == null) {
            files.map((file) => {
                const absolutePath = path_1.default.join(dirPath, file);
                fs_1.default.stat(absolutePath, (error, status) => {
                    if (status.isDirectory()) {
                        directories.push(file);
                    }
                });
            });
        }
    });
    return directories;
}
exports.listDirectories = listDirectories;
