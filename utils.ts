import fs from 'fs';
import path from 'path';

export function listDirectoriesSync(dirPath: string): string[] {
    const directories: string[] = [];

    const entities: string[] = fs.readdirSync(dirPath);

    entities.map((entity: string) => {

        const absolutePath = path.join(dirPath, entity);

        if(fs.statSync(absolutePath).isDirectory()) {
            directories.push(absolutePath);
        }
    });

    return directories;
}
