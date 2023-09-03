import { listDirectoriesSync } from './utils';

function main(directory: string) {
        
    listDirectoriesSync(directory)
    .map((val) => console.log(val));
}

main(".");
