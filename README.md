<h2 align="center">Character Counter</h2>

A reusable React + TypeScript component for tracking character count, word count, and estimated reading time.

Installation & Setup:
--------------------
````bash
git clone https://github.com/jayanthibs/character-counter-lab9.2.git
cd character-counter-lab9.2
npm install
npm run dev
````
Component Overview
------------------

### CharacterCounter
 
* Main container component
* Manages state
* Calculates: Character count, Word count and Reading time.

### TextInput

* Controlled input component
* Sends updated text back to parent

### StatsDisplay

* Displays calculated statistics
* Optionally shows reading time

Reflections:
------------

How did you handle state updates when the text changed?

The CharacterCounter uses React’s useState to track the input text. When the user types, handleChange updates the state with setText, causing the component to re-render. On each render, it counts words, characters, and estimates reading time so the stats always match what’s typed.

What considerations did you make when calculating reading time?

Reading time is calculated by assuming ~3 words per second, trimming and filtering extra spaces to get an accurate word count, and converting total seconds into minutes and seconds. This ensures a simple, real-time estimate that updates as the user types.

How did you ensure the UI remained responsive during rapid text input?

I kept the UI responsive by using React’s useState for the text input. Every keystroke updates the text state and triggers a re-render, but all calculations (word count, character count, reading time) are simple and fast, so React can update the display immediately without lag, even during rapid typing.

What challenges did you face when implementing the statistics calculations?

The main challenges were counting words correctly (ignoring extra spaces) and showing reading time in minutes and seconds. I also had to make sure these calculations were fast so the app stayed smooth while typing.
