import { Fibonacci } from "../fibonacci";
import { IteratorResult } from "../iters";

describe("The Fibonacci Sequence", () => {
   let fib: Fibonacci;
   describe("With no upper bound", () => {
	  beforeAll(() => {
		 fib = new Fibonacci(null);
	  });
	  test("Should be defined.", () => {
		 expect(fib).toBeDefined();
	  });
	  test("Should throw the error.", () => {
		 expect(() => {
			fib.next();
		 }).toThrow("NO upper bound specified.");
	  });
   });
   describe("With upper bound", () => {
	  let fib: Fibonacci;
	  let seq: Array<number>;
	  let nextInSeq: IteratorResult<number>;
	  beforeAll(() => {
		 fib = new Fibonacci(10);
		 seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, -1];
	  });
	  test("Should have each nth term.", () => {
		 for(let it = 0; it < seq.length-1; it++) {
			nextInSeq = fib.next();
			expect(nextInSeq.done).toBeFalsy();
			expect(nextInSeq.value).toBe(seq[it]);
		 }
		 nextInSeq = fib.next();
		 expect(nextInSeq.done).toBeTruthy();
		 expect(nextInSeq.value).toBeNull();
	  });
   });
   describe("With upper bound and not starting at default initial values", () => {
	  let fib: Fibonacci;
	  let seq: Array<number>;
	  let nextInSeq: IteratorResult<number>;
	  beforeAll(() => {
		 fib = new Fibonacci(10, 1, 2);
		 seq = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, -1];
	  });
	  test("Should have each nth term.", () => {
		 for(let it = 0; it < seq.length-1; it++) {
			nextInSeq = fib.next();
			expect(nextInSeq.done).toBeFalsy();
			expect(nextInSeq.value).toBe(seq[it]);
		 }
		 nextInSeq = fib.next();
		 expect(nextInSeq.done).toBeTruthy();
		 expect(nextInSeq.value).toBeNull();
	  });
   });
   describe("With upper bound as an array", () => {
	  let fib: Fibonacci;
	  let fibArr: Array<number>;
	  let seq: Array<number>;
	  beforeAll(() => {
		 fib = new Fibonacci(10);
		 fibArr = [...fib];
		 seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
	  });
	  test("Should be an array of first 10 Fibonacci sequence.", () => {
		 expect(fibArr).toEqual(seq);
	  });
   });
   describe("With upper bound as an array and not starting at default values", () => {
	  let fib: Fibonacci;
	  let fibArr: Array<number>;
	  let seq: Array<number>;
	  beforeAll(() => {
		 fib = new Fibonacci(10, 1, 2);
		 fibArr = [...fib];
		 seq = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
	  });
	  test("Should be an array of first 10 Fibonacci sequence.", () => {
		 expect(fibArr).toEqual(seq);
	  });
   });
});
