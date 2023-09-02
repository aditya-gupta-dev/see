import fs from 'fs';
import path from 'path';

export function listDirectories(dirPath: string): string[] {
    const directories: string[] = [];

    fs.readdir(dirPath, (err, files: string[]) => {
        if(err == null) {

            files.map((file: string) => {
                const absolutePath = path.join(dirPath, file);
                
                fs.stat(absolutePath, (error, status: fs.Stats) => {
                    if(status.isDirectory()) {
                        directories.push(file);
                    }
                })
            }); 
        }
    });
    
    return directories;
}