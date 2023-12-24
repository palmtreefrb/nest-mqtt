/// <reference types="node" />
import { IClientPublishOptions, IClientSubscribeOptions, ISubscriptionGrant, MqttClient, Packet } from 'mqtt';
export declare class MqttService {
    private readonly client;
    constructor(client: MqttClient);
    subscribe(topic: string | string[], opts?: IClientSubscribeOptions): Promise<ISubscriptionGrant[]>;
    unsubscribe(topic: string, opts?: IClientSubscribeOptions): Promise<Packet>;
    publish(topic: string, message: string | Buffer | object, opts?: IClientPublishOptions): Promise<Packet>;
}
