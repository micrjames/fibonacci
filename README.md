# fibonacci
A fibonacci generator.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
The code, here, is written to implement a fibonacci series.

## Technologies Used
The code will be written in Typescript and tested using JestJS.
 
## Features
* Get the Fibonacci sequence starting from 0 and 1.
* Get the Fibonacci sequence starting from 1 and 2.
* Get each value of the sequence.
* Get an array of the values of the sequence.

## Setup
Just import the class, as usual.
 
## Usage
The code from the project will be largely executed through the testing of the code to ensure that a correct solution has been found.
```
   npm test
```

To use in a project, instaniate the class.
```
    const fib: Fibonacci = new Fibonacci(10);
```
, which gives the first *ten* numbers of the sequence starting with *0* and *1*.

Alternatively, we can start with intial numbers of *1* and *2*, or any other starting numbers.
```
    const fib: Fibonacci = new Fibonacci(10, 1, 2);
```

To obtain the values of the sequence, we can get an array of the sequence, by
```
    [...fib]
```
This example gives the array of the sequence as *[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]*.
 
Alternatively, we can get each value sequentially.
```
    fib.next().value
```
gives the number *1*.
```
    fib.next().value
```
gives the number *2*.
```
    fib.next().value
```
gives the number *3*.

We can obtain in one of these two methods, but not both. If one is employed, and we attempt to employ the other an error will occur.

## Project Status
The project will be in an ongoing status until the code is completed.
  
## Room for Improvement
Similarly to the above section of this document, there can be seen a general room for improvement.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.                                                                          
