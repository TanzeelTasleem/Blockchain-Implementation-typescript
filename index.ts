import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain = new Blockchain("MyChain");  //BlockChain initialized 

const b1 = new Block(1, Date.now().toString(), { amount: "$50" }) // block initialized for Blockchain by default Blockchain contains a genesis block.

const b2 = new Block(2, Date.now().toString(), { amount: "$100" }) // block initialized for Blockchain by default Blockchain contains a genesis block.

blockchain.addBlock(b1);  // block added in BlockChain
blockchain.addBlock(b2);  // block added in BlockChain

console.log(blockchain.validateChain()); // This will return true because we doesn't change or manipulate any type of data in blockchain means that chain is correct and in its original form.

(blockchain.chain[1].data as any) = { amount: "$70" };  // we have change a data in blockchain.

console.log(blockchain.validateChain()); // This will return false because the hash of the block is not same as it was earlier means that chain is tempered someone tries to change data in it.

(blockchain.chain[1].hash as any) = blockchain.chain[1].generateBlockHash()  // but what if we re-generated the hash of that block?

console.log(blockchain.validateChain()); // This will also generate false because now the perivous hash of the block is not same as it was earlier.
// so if someone wants to manipulate the data in blockchain then he has to generate the hash for all the blocks in the chain.

console.log(JSON.stringify(blockchain, null, 2));

