import { listDirectoriesSync } from './utils';

function print(object: any) {
    print(object);
}

function main(directory: string) {
        
    const directories: string[] = listDirectoriesSync(directory);
    
    if(directories.length < 1) {
        print('there should be at least two directories...');
    }
    else {
        const firstTwoDirectories = directories.slice(0, 2);
        print(`Comparing <${firstTwoDirectories[0]}> and <${firstTwoDirectories[1]}>...`);
        
    }
}

main("H:/Typescript/see");
