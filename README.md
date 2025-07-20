# Kata - PatternCraft

from: https://www.codewars.com/collections/patterncraft

## Design Ideas
- using the decorator pattern, allow the units to have upgradeable armor and weapons
- using the adapter pattern, allow the units to have a single uniform attack and hurt methods
- using the state pattern
- using the visitor pattern

## Your Goal
1. Add tests to get to 100% mutation test coverage
2. Refactor the code to have less duplication
3. Introduce some of the design ideas


## Test Coverage
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |     100 |    84.84 |     100 |     100 |                  
src                   |     100 |    78.04 |     100 |     100 |                  
index.js              |     100 |    78.04 |     100 |     100 | 22-28,47-61,72-84
src/units             |     100 |      100 |     100 |     100 |                  
marine.js             |     100 |      100 |     100 |     100 |                  
zealot.js             |     100 |      100 |     100 |     100 |                  
zergling.js           |     100 |      100 |     100 |     100 |                  
test                  |     100 |    85.71 |     100 |     100 |                  
index_units.spec.js   |     100 |    85.71 |     100 |     100 | 3                
test_units.spec.js    |     100 |      100 |     100 |     100 |                  
----------------------|---------|----------|---------|---------|-------------------

## Mutation Test Coverage
--------------|------------------|----------|-----------|------------|----------|----------|
| % Mutation score |          |           |            |          |          |
File          |  total | covered | # killed | # timeout | # survived | # no cov | # errors |
--------------|--------|---------|----------|-----------|------------|----------|----------|
All files     |  76.71 |   76.71 |      159 |         9 |         51 |        0 |        0 |
units         |  93.42 |   93.42 |       71 |         0 |          5 |        0 |        0 |
marine.ts     |  96.15 |   96.15 |       25 |         0 |          1 |        0 |        0 |
zealot.ts     | 100.00 |  100.00 |       21 |         0 |          0 |        0 |        0 |
zergling.ts   |  86.21 |   86.21 |       25 |         0 |          4 |        0 |        0 |
index.ts      |  67.83 |   67.83 |       88 |         9 |         46 |        0 |        0 |
--------------|--------|---------|----------|-----------|------------|----------|----------|