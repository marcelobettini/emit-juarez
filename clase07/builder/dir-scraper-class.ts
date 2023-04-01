import { log } from "console";
import fs from "fs";
interface IFileReader {
  isJSONFile(file: string): boolean;
  readText(file: string): string;
  readJSON(file: string): unknown;
}

/*
ahora vamos a crear el directory scraper que va a usar el file reader para procesar los archivos que vaya encontrando...
*/

class DirectoryScraper {
  constructor(public dirPath: string, public fileReader: IFileReader) { }
  scanFiles() {
    return fs.readdirSync(this.dirPath)
      .reduce<Record<string, unknown>>((acc: Record<string, unknown>, file: string) => {
        if (this.fileReader.isJSONFile(file)) {
          acc[file] = this.fileReader.readJSON(`${this.dirPath}/${file}`); //si es un archivo JSON llamamos al método que puede leerlo          
        } else {
          acc[file] = this.fileReader.readText(`${this.dirPath}/${file}`);
        }
        return acc;
      }, {});
  }
}

/* implementamos la clase del lector de archivos*/

class FileReader implements IFileReader {
  isJSONFile(file: string): boolean {
    return file.endsWith(".json");
  };
  readText(file: string): string {
    return fs.readFileSync(file, "utf8").toString();
  };
  readJSON(file: string): unknown {
    return JSON.parse(fs.readFileSync(file, "utf8").toString());
  };
}


const fileReader = new FileReader();
const dirScraper = new DirectoryScraper("./directoryData", fileReader);

const result = dirScraper.scanFiles();

log(result);
