import mongoHelper = require('./helpers/mongo');
import { ConsoleLogger } from "./workers/Logger";
import { RollbitCsGoWorker } from './workers/Worker/RollbitCsGoWorker';

mongoHelper.connect();

var logger = new ConsoleLogger();
var worker = new RollbitCsGoWorker(logger);
worker.work();
