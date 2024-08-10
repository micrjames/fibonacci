import { IteratorResult } from "./iters";

export class Fibonacci implements IterableIterator<number> {
   protected num1: number;
   protected num2: number;
   protected it: number;
   protected n: number;

   constructor(n: number, num1: number = 0, num2: number = 1) {
	  this.num1 = num1;
	  this.num2 = num2;
	 
	  this.it = 0;
	  this.n = n;
   }

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
