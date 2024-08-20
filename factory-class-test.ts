import { EnvironmentFactory } from "./factory-class";

const logger = EnvironmentFactory.createEnvironment();

logger.debug('Debug message');
logger.warn('Warn message');
logger.error('Error message');
logger.info('Info message')