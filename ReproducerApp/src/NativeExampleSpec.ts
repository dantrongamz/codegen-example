import type { TurboModule } from 'react-native'
import { TurboModuleRegistry } from 'react-native'

export interface Spec extends TurboModule {
  androidMethod?: () => Promise<Object>
  iosMethod1: () => Promise<Object>
  iosMethod2: () => Promise<Object>
}

export const OnDemandTurboModule = TurboModuleRegistry.get<Spec>('ExampleModule')