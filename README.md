# Wiki Chess

This POC has been done using the free api from chess.com.

## Get Started

Visit https://chess-app-ashen.vercel.app/ or clone this repository and run `pnpm start`.

## Stack

- Vite `react-ts` template
- Tailwind
- TanStack Query
- TanStack Router
- date-fns

## Why's

- I used Vite instead of other more "complete" frameworks with SSR's capabilities like Next.js because the DX is better and requires less scaffolding.
- I used Tailwind because personally I think that the DX and the tight coupling between components and classes makes it unbeatable.
- I used TanStack Query for managing the server-side data an async operations.
- I used TanStack Router latest version because I yet had not the opportunity to play with it (File based routing ala Next.js) and it has been pretty simple and straightforward.
- I used date-fns because while it's an old lib, its pretty well exported and bundlers shake the un-necesary code very easily, also the `format` fn is super handy.

## Other takes explained

- Design-wise I took a very minimalistic and simple approach by leveraging a monospaced font and black/white colors.
- In the GM profile page, the timer with `HH:MM:SS`, I've done it by accessing and modifying directly the DOM content,
while this may sound and feel like an antipattern in React for operations that involve tight, quick & repeated updates
it's actually more efficient than leveraging an `useState` or similar React solutions.
- While the app is not very complex, and having a lot of components may sound like over-engineering, I did create a 
folder example of how I like to organize components, atomic organization (atoms, molecules...).
- Error handling I didn't handle it for the list, only for the GM details and I make the assumption that it is a `not found`.
- I would leverage playwright for both E2E and unit testing.
