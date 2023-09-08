export const messages = {
    numberOfFilesNotEqual : (filesInFirstDirectory: number, filesInSecondDirectory: number) => 
        `F: first directory contains ${filesInFirstDirectory} files whereas the second one contains ${filesInSecondDirectory} files`,
    numberOfFilesEqual : (filesInFirstDirectory: number) => 
        `P: first and the second directory contain the same no. of files i.e. ${filesInFirstDirectory}`,
    fileNamesNotEqual : (firstFileName: string, secondFileName: string) => 
            `F: ${firstFileName} dosen't matches with ${secondFileName}`    
    
}
