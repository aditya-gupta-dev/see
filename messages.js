"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = void 0;
exports.messages = {
    numberOfFilesNotEqual: (filesInFirstDirectory, filesInSecondDirectory) => `F: first directory contains ${filesInFirstDirectory} files whereas the second one contains ${filesInSecondDirectory} files`,
    numberOfFilesEqual: (filesInFirstDirectory) => `P: first and the second directory contain the same no. of files i.e. ${filesInFirstDirectory}`,
    fileNamesNotEqual: (firstFileName, secondFileName) => `F: ${firstFileName} dosen't matches with ${secondFileName}`
};
