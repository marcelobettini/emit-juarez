import { log } from 'console';
import * as fs from 'fs';
function getData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(new Error(err));
      } else {

        resolve(JSON.parse(data));
      }
    });
  });
};

const data = await getData("./users.json");
data.forEach(el => log(`${el.location.street.name} - ${el.location.street.number} `));
