# focus
A simple Chrome new tab extension for tracking todos and notes in the browser.

### About
***focus*** is a client-side Single Page Application (SPA) built with [Svelte](https://svelte.dev/), [Flowbite](https://flowbite-svelte.com/), and [Tailwind](https://tailwindcss.com/), packaged into a Chrome new tab extension. For storage, it uses [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), which is a client-side database available in [most browsers](https://caniuse.com/?search=indexeddb).

<br />  

![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Key Features
- A todo list to keep track of the low-level things you need to do
- A notes manager that allows you to write notes in markdown, with some rich-text support
- Search for todo's and notes

### Coming Soon
- For tasks:
  - Mandatory deadline to force you to plan ahead
  - Priority level
  - Rich-text support for descriptions
- For notes:
  - Custom tags
- For both:
  - Filtering by tag for todos and notes
  - Tables for sorting and pagination

## Gallery

### Home
<img width="800" alt="image" src="https://github.com/chrischow/focus/assets/13072656/9f762aee-0d4c-4e13-b8fc-091862e7a3cf">

### Edit todos
<img width="600" alt="image" src="https://github.com/chrischow/focus/assets/13072656/d4933c72-4ab1-4c97-964e-2003aab3b737">

### Manage all todos
<img width="800" alt="image" src="https://github.com/chrischow/focus/assets/13072656/febad04c-d7d8-4254-a297-910f8792a533">


### Edit notes
<img width="800" alt="image" src="https://github.com/chrischow/focus/assets/13072656/fca108c2-8dc2-4228-bb9b-e4893f2845f4">

## Motivation

### Help my self stay focused
Staying focused requires effort. But, it's a little easier when you're reminded of the things you need to do at the right time and place. For me, that *right place* is in the browser, and the *right time* is just before I'm about to start Googling things that are unrelated to what I need to do.

### Help my team stay focused
The ideal level of fidelity of tasks *as listed in task trackers* differs for individuals and teams. Personally, I've found it helpful to make my own daily list of low-level things to do, which are a breakdown of the higher order tasks typically captured in the team's issue tracker. However, these things do not belong in the team's issue tracker because they add noise for team members.

### Personal Goal: Learning a new framework
At work, I use React and *only* React for app frontends. To broaden my horizons, I decided that unless I'm going for speed, I will (a) use tools that I do not typically use at work, and (b) explore use cases that I would otherwise not get exposure to at work.
