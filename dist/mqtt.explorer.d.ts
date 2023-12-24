import { Logger, OnModuleInit } from '@nestjs/common';
import { DiscoveryService, MetadataScanner } from '@nestjs/core';
import { MqttClient } from 'mqtt';
import { MqttModuleOptions, MqttSubscribeOptions, MqttSubscriber, MqttSubscriberParameter } from './mqtt.interface';
export declare class MqttExplorer implements OnModuleInit {
    private readonly discoveryService;
    private readonly metadataScanner;
    private readonly logger;
    private readonly client;
    private readonly options;
    private readonly reflector;
    subscribers: MqttSubscriber[];
    constructor(discoveryService: DiscoveryService, metadataScanner: MetadataScanner, logger: Logger, client: MqttClient, options: MqttModuleOptions);
    onModuleInit(): void;
    preprocess(options: MqttSubscribeOptions): string | string[];
    subscribe(options: MqttSubscribeOptions, parameters: MqttSubscriberParameter[], handle: any, provider: any): void;
    explore(): void;
    private getSubscriber;
    private static topicToRegexp;
    private static matchGroups;
}
