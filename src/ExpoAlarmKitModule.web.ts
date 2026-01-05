import { registerWebModule, NativeModule } from 'expo';

import { ExpoAlarmKitModuleEvents } from './ExpoAlarmKit.types';

class ExpoAlarmKitModule extends NativeModule<ExpoAlarmKitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoAlarmKitModule, 'ExpoAlarmKitModule');
