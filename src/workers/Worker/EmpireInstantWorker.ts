import { EnumBot } from '../../helpers/enum';
import { EmpireWorkerBase } from './EmpireWorkerBase';
import { DatabaseSelectorTask } from '../DatabaseSelector/DatabaseSelectorTask';
import { EmpireInstantDatabaseSelector } from '../DatabaseSelector/EmpireInstantDatabaseSelector';
import { InventoryGetterTask } from '../InventoryGetter/InventoryGetterTask';
import { EmpireInstantInventoryGetterTask } from '../InventoryGetter/EmpireInstantInventoryGetterTask';
import { IEmpireInstantInventoryItem } from '../../interfaces/csgoEmpire';
export class EmpireInstantWorker extends EmpireWorkerBase<IEmpireInstantInventoryItem> {
  bot = EnumBot.EmpireInstant;
  getDatabaseSelector(): DatabaseSelectorTask {
    return new EmpireInstantDatabaseSelector(EnumBot.EmpireInstant);
  }
  getInventoryGetter(): InventoryGetterTask<IEmpireInstantInventoryItem> {
    return new EmpireInstantInventoryGetterTask(this.botUser);
  }
}
