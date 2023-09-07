import fs from 'fs';
import path from 'path';
import { messages } from './messages';

function getAllFiles(dirPath: string, arrayOfFiles: string[]): string[] {
    const files = fs.readdirSync(dirPath);
  
    arrayOfFiles = arrayOfFiles || [];
  
    files.forEach(function (file) {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    });
  
    return arrayOfFiles;
  }

export async function compareTwoDirectories(first: string, second: string) {
    const firstFiles = getAllFiles(first, [])
    const secondFiles = getAllFiles(second, [])

    if(firstFiles.length !== secondFiles.length) {
        console.log(messages.numberOfFilesNotEqual(firstFiles.length, secondFiles.length))
    }
    else {
      console.log(messages.numberOfFilesEqual(firstFiles.length));
      for(let i = 0; i < firstFiles.length; i++) {
        const baseOfFirst = path.basename(firstFiles[i]);
        const baseOfSecond = path.basename(secondFiles[i])

      }
    }
}

export function listDirectoriesSync(dirPath: string): string[] {
    const directories: string[] = [];

    const entities: string[] = fs.readdirSync(dirPath);

    entities.forEach((entity: string) => {

        const absolutePath = path.join(dirPath, entity);

        if(fs.statSync(absolutePath).isDirectory()) {
            directories.push(absolutePath);
        }
    });

    return directories;
}
