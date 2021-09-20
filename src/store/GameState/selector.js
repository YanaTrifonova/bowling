export const getAllGames = state => state.games;
export const getFrameScore = (gameIndex, playerName, frameIndex) => state => state.games[gameIndex - 1][playerName][frameIndex]?.totalScores;
// export const getTotalScoreAcrossGames = (playerName) => state => state.games.map((playerGameTable, ind, arr) => playerGameTable[playerName][playerGameTable[playerName].length - 1].totalScores).reduce((acc, val) => (acc + val), 0);
// export const getWonGames = (playerName) => state => state.games
//                                                          .map((playerGameTable, ind, arr) =>
//                                                            Object.keys(playerGameTable) // player names
//                                                                  .reduce((acc, val) => ([...acc, [val, playerGameTable[val][playerGameTable[val].length - 1].totalScores]]), []))
//                                                          .map((finalScores, ind, arr) =>
//                                                            finalScores.sort((l, r) => r[1] - l[1])[0][0] === playerName)
//                                                          .reduce((acc, val) => acc + val, 0);

export const getTotalScoreAcrossGames = (players) => state => {
  const scores = players.reduce((a, v) => ({ ...a, [v]: 0}), {});
  players.forEach((player) => {
    state.games.forEach((game) => {
      if (game[player]) {
        scores[player] += game[player][9].totalScores;
      }
    })
  })

  return scores;
}

export const getWonGames = (players) => state => {
  const scores = players.reduce((a, v) => ({ ...a, [v]: 0}), {});
  for (let playerGameTable of state.games) {
    const gamePlayers = Object.keys(playerGameTable).filter((player, ind, arr) => players.indexOf(player) !== -1);
    let maxValue = -1;
    for (let playerName of gamePlayers) {
      if (playerGameTable[playerName][9].totalScores > maxValue) {
        maxValue = playerGameTable[playerName][9].totalScores;
      }
    }
    for (let playerName of gamePlayers) {
      if (playerGameTable[playerName][9].totalScores === maxValue && maxValue !== 0) {
        scores[playerName] += 1;
      }
    }
  }
  return scores;
}
