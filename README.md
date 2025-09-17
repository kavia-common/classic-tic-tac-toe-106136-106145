# classic-tic-tac-toe-106136-106145

A modern, Ocean Professional themed Tic Tac Toe built with React Native (Expo).

How to run:
- Install dependencies: npm install
- Start development: npm run start (or npm run android / npm run ios / npm run web)

CI note:
- This project uses Expo’s managed workflow. Native Android/iOS projects are not checked into the repo.
- Some CI environments attempt to run ./gradlew by default; a no-op placeholder is included to avoid failures.

Features:
- Turn-based play with clear X/O indicators
- Win and draw detection with highlighted winning line
- Score tracking across rounds (X / O / Draws)
- Restart button to begin new round (alternates starting player)
- Ocean Professional theme: blue/amber accents, modern surfaces and borders