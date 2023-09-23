import { DynamicModule, Global, Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { createClientProvider } from './client.provider';
import { MqttExplorer } from './mqtt.explorer';
import { DiscoveryModule } from '@nestjs/core';
import { createLoggerProvider, createOptionProviders } from './options.provider';
import { MqttModuleAsyncOptions, MqttModuleOptions } from './mqtt.interface';
import { MQTT_OPTION_PROVIDER } from './mqtt.constants';

@Module({
  imports: [DiscoveryModule],
  exports: [MqttService],
})
export class MqttModule {
  public static forRootAsync(options: MqttModuleAsyncOptions): DynamicModule {
    return {
      module: MqttModule,
      global: options.global,
      providers: [
        ...createOptionProviders(options),
        createLoggerProvider(options),
        createClientProvider(),
        MqttExplorer,
        MqttService,
      ],
    };
  }

  public static forRoot(options: MqttModuleOptions): DynamicModule {
    return {
      module: MqttModule,
      providers: [
        {
          provide: MQTT_OPTION_PROVIDER,
          useValue: options,
        },
        createLoggerProvider(options),
        createClientProvider(),
        MqttExplorer,
        MqttService,
      ],
    };
  }
}
