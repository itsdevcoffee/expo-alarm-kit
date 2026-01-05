import * as React from 'react';

import { ExpoAlarmKitViewProps } from './ExpoAlarmKit.types';

export default function ExpoAlarmKitView(props: ExpoAlarmKitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
