import { SHA256 } from 'crypto-js';

export class Block {
    public readonly number: number;
    public readonly data: any;
    public readonly timeStamp: string;
    public readonly hash: string;
    public readonly previousHash: string;

    constructor(index: number, timeStamp: string, data: any, previousHash: string = "") {
        this.number = index;
        this.data = data;
        this.timeStamp = timeStamp;
        this.previousHash = previousHash
        this.hash = this.generateBlockHash();
    }

    /**
     * Generate Block hash
     */
    public generateBlockHash(): string {
        return SHA256(JSON.stringify({ data: this.data, number: this.number, timeStamp: this.timeStamp, previousHash: this.previousHash })).toString()
    }
}