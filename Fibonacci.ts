import { IteratorResult } from "./iters";

export class Fibonacci implements IterableIterator<number> {
   protected num1 = 0;
   protected num2 = 1;
   protected it = 0;

   constructor(protected n: number) {}

   public next(): IteratorResult<number> {
	  if(this.n) {
		 let current = this.num1;
		 this.num1 = this.num2;
		 this.num2 = current + this.num1;
		 this.it++;
		 if(this.it > this.n) {
			return {
			   done: true,
			   value: null
			} 
		 } 
		 return {
			   done: false,
			   value: current
		 }
	  } else
		 throw new Error("NO upper bound specified.");
   }

   [Symbol.iterator](): IterableIterator<number> {
	  return this;
   }
}
