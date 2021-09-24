# 10 pin-bowling (traditional) scoring system

![Polishing a bowling ball gif](https://i.imgur.com/VG6LBWO.gif)

## Live

### [🎳 Link [press me]](https://10-pin-bowling.netlify.app/)

## Rules of play

A game of bowling consists of ten frames. In each frame, the bowler will have two chances to knock down as many pins as
possible with their bowling ball. In games with more than one bowler, as is common, every bowler will take their frame
in a predetermined order before the next frame begins. If a bowler is able to knock down all ten pins with their first
ball, he is awarded a strike. If the bowler is able to knock down all 10 pins with the two balls of a frame, it is known
as a spare. Bonus points are awarded for both of these, depending on what is scored in the next 2 balls (for a strike)
or 1 ball (for a spare). If the bowler knocks down all 10 pins in the tenth frame, the bowler is allowed to throw 3
balls for that frame. This allows for a potential of 12 strikes in a single game, and a maximum score of 300 points, a
perfect game. 

## Set up a project

### clone repository

```
git clone git@github.com:YanaTrifonova/bowling.git
```

### install all the dependencies

```
npm install
```

### run in development mode
```
npm start
```
### run build
```
npm run build
```

### run tests
```
npm run test
```
```text
 PASS  __test__/store/GameState/reducer.test.js
 PASS  __test__/App.test.js
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   36.62 |    41.49 |   22.22 |   38.19 |                   
 Components/Game      |   22.22 |      100 |       0 |      25 |                   
  index.jsx           |   14.29 |      100 |       0 |   14.29 | 15-36             
  styles.js           |      50 |      100 |       0 |     100 |                   
 Components/GameFrame |    3.23 |        0 |       0 |    3.33 |                   
  index.jsx           |    1.67 |        0 |       0 |    1.69 | 17-113            
  styles.js           |      50 |      100 |       0 |     100 |                   
 Components/GameTable |   33.33 |      100 |       0 |      40 |                   
  index.jsx           |      25 |      100 |       0 |      25 | 12-20             
  styles.js           |      50 |      100 |       0 |     100 |                   
 Components/Games     |       0 |      100 |       0 |       0 |                   
  index.jsx           |       0 |      100 |       0 |       0 | 7-13              
 Components/Header    |       0 |      100 |       0 |       0 |                   
  index.jsx           |       0 |      100 |       0 |       0 | 6                 
 Components/Main      |       0 |        0 |       0 |       0 |                   
  index.jsx           |       0 |        0 |       0 |       0 | 8-16              
 Components/Players   |    6.45 |        0 |       0 |     6.9 |                   
  index.jsx           |    3.45 |        0 |       0 |    3.57 | 24-109            
  styles.js           |      50 |      100 |       0 |     100 |                   
 store                |     100 |      100 |     100 |     100 |                   
  index.js            |     100 |      100 |     100 |     100 |                   
 store/GameState      |    73.4 |    76.47 |   53.85 |   77.91 |                   
  actions.js          |     100 |      100 |     100 |     100 |                   
  reducer.js          |     100 |     90.7 |     100 |     100 | 50-52,137         
  selector.js         |   13.79 |        0 |       0 |   17.39 | 3,6-15,19-35      
----------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       18 passed, 18 total
Snapshots:   1 passed, 1 total
Time:        2.857 s
Ran all test suites.

```
