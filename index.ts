import { Block } from "./Block";
import { Blockchain } from "./Blockchain";

const blockchain = new Blockchain("MyChain");  //BlockChain initialized 

const b1 = new Block( 1 , Date.now().toString() , {amount : "$50"} ) // block initialized for Blockchain by default Blockchain contains "1" genesis block.

blockchain.addBlock(b1);  // block added in BlockChain

console.log(JSON.stringify(blockchain,null , 2)); 