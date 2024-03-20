# tiptap

A typing speed test.
Created with Svelte & SvelteKit, Faker.js, Vite, and Playwright.

## Introduction

I built tiptap as my take on a typing speed test, for fun, and also to try out using Svelte to build something interesting.

![alt text](./static/tiptap_thumb.png "A screenshot of the tiptap typing test main page showing a block of text above an input field against a daffodil yellow background")

## Goals

My main goal was to explore how I might address certain things I personally find irksome in other typing speed tests I've tried, mainly surrounding the split-second UI cues in the actual text mid-test that communicate success and error states. For me, I want to both be able to see the body of text that I have written, and also see exactly where I'm at in the text I'm typing from and whether my current letter is correct or incorrect.

I also wanted to offer at least a few customization options to give some range in terms of difficulty level, so I added sample text in several languages and also a few different timer durations to choose from.
