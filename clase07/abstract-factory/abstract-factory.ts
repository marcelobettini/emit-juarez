/* USE CASE: queremos crear un logger que tendrá determinadas funciones, dependiendo de si estamos en modo de producción o de desarrollo*/

interface ILogger {
  info(message: string): void;
  debug(message: string): void;
  error(message: string): void;
  warn(message: string): void;
}
/*Implementaremos de dos modos distintos: un logger de prod y otro de dev. El de producción implementa solamente dos métodos*/

class ProductionLogger implements ILogger {
  info(message: string): void { };
  debug(message: string): void { };
  error(message: string): void { console.error(message); };
  warn(message: string): void { console.warn(message); };
};

/*El logger de desarrollo, no obstante, implementa todos los métodos citados en la interfaz*/

class DevelopmentLogger implements ILogger {
  info(message: string): void { console.info(message); };
  debug(message: string): void { console.debug(message); };
  error(message: string): void { console.error(message); };
  warn(message: string): void { console.warn(message); };
}


/*Ahora que tenemos los loggers vamos a crear la fábrica que es la encargada de producirlos a demanda del código clientes*/

export class LoggerFactory {
  public static createLogger(): ILogger {
    if (process.env.NODE_ENV === "production") {
      return new ProductionLogger();
    } else {
      return new DevelopmentLogger();
    }
  }
}