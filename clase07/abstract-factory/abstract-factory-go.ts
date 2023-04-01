import { LoggerFactory } from "./abstract-factory";
const logger = LoggerFactory.createLogger();

logger.debug("Quitando bichos del código");
logger.error("Pónganse casco, voló todo a la m...");
logger.warn("Ojo, parece que anda pero en cualquier momento revienta");
logger.info("Es friday... and your body knows it");
