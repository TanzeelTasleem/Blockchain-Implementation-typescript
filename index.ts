import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain = new Blockchain("MyChain");  //BlockChain initialized 

const b1 = new Block(1, Date.now().toString(), { amount: "$50" }) // block initialized for Blockchain by default Blockchain contains a genesis block.

const b2 = new Block(2, Date.now().toString(), { amount: "$100" }) // block initialized for Blockchain by default Blockchain contains a genesis block.

blockchain.addBlock(b1);  // block added in BlockChain
blockchain.addBlock(b2);  // block added in BlockChain

console.log(JSON.stringify(blockchain, null, 2));

