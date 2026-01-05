import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoAlarmKitViewProps } from './ExpoAlarmKit.types';

const NativeView: React.ComponentType<ExpoAlarmKitViewProps> =
  requireNativeView('ExpoAlarmKit');

export default function ExpoAlarmKitView(props: ExpoAlarmKitViewProps) {
  return <NativeView {...props} />;
}
