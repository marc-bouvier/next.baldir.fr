---
title: Write your own TDD lib in CodeWars and Codingame
date: 2022-09-11
lang: en
description: You want to practice TDD. Did you know you can write you own testing library inside CodeWars or Codingame? Here's how you can do it.
cover_image: /2022-09-11-write-your-own-TDD-lib-in-codewars-lowres.png
tag:
  - TDD
  - TestDrivenDevelopment
  - Kata
  - Codingame
  - CodeWars
  - Typescript
date_updated: 2026-03-22T17:19
---
[Codewars](https://www.codewars.com/) and [Codinggame](https://www.codingame.com/) can be great tools for programming [deliberate practice](https://codingdojo.org/practices/DeliberatePractice/).

However the katas test are already written for.

If it can help quickly learn new stuff, it can be frustrating for people who wants the practice [Test-Driven Development](https://codingdojo.org/practices/TestDrivenDevelopment/) not to write their own tests.



Did you know you can write you own testing library inside the kata you are practicing?



The smallest testing library consists in `assertEquals(actual,expected)`.

Additional stuff is just sugar.

Here is an example of this kind of testing library in a [random Codewars Typescript Kata](https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript).

Of course you can use any language you want if it support standard error output.

```ts

export function humanReadable(seconds:number):string {
// TODO
let result='00:00:00';
return result;
}



// After the function to implement in the kata you can run any code you want
// So we write our testing library ...
function assertEquals(
  actual:any, expected:any,
  description:string = `Expected "${actual}" to equal "${expected}"`){

if(actual === expected){
  // Codewars allows you to log anything you want using standard error output
    console.error(`✅ : ${description}`)
  } else {
    console.error(`❌ : ${description}`)
  }
}


// ... and then our own assertions
assertEquals(humanReadable(0),'00:00:00')
assertEquals(humanRefadable(5),'00:00:05')

```

![Your own testing library in action. This screenshot of a codewars kata shows results of the assertions written in the previous code snippet](/2022-09-11-write-your-own-TDD-lib-in-codewars-lowres.png)

![Your own testing library in action. This screenshot of a codingame kata shows results of the assertions written in the previous code snippet](/2022-09-11-write-your-own-TDD-lib-in-codingame-lowres.png)
