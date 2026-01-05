// Reexport the native module. On web, it will be resolved to ExpoAlarmKitModule.web.ts
// and on native platforms to ExpoAlarmKitModule.ts
export { default } from './ExpoAlarmKitModule';
export { default as ExpoAlarmKitView } from './ExpoAlarmKitView';
export * from  './ExpoAlarmKit.types';
