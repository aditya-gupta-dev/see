import fs from 'fs';
import { listDirectories } from './utils';

function main(directory: string) {
        
    listDirectories(directory)
    .map((val) => console.log(val));
}

main(".");