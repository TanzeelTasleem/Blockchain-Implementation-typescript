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
        (block.previousHash as string) = this.chain[this.chain.length - 1].hash;
        (block.hash as string) = block.generateBlockHash(); // here we re-generating the hash again because we added a previousHash property in block
        this.chain.push(block);
        this.incNumofBlocks()
    }

    private incNumofBlocks() {
        (this.numOfBlocks as number)++;
    }

    /**
     * validateChain
     */
    public validateChain(): boolean {

        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.generateBlockHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }

        }

        return true;

    }
}
