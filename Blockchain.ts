import { Block } from "./Block";

export class Blockchain {
    public readonly name: string;
    public readonly chain: Block[];
    public readonly numOfBlocks: number = 0;

    constructor(name: string) {
        this.name = name;
        this.chain = [this.createGenisisBlock()];
    }

    private createGenisisBlock(): Block {
        this.incNumofBlocks()
        return new Block(0, Date.now().toString(), "Genesis Block", "0")
    }

    public addBlock(block: Block) {
        (block.previousHash as string) = this.chain[this.chain.length - 1].hash
        this.chain.push(block);
        this.incNumofBlocks()
    }

    private incNumofBlocks() {
        (this.numOfBlocks as number)++;
    }
}
