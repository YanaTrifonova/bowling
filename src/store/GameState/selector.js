export const getAllGames = state => state.games;
export const getFrameScore = (gameIndex, playerName, frameIndex) => state => state.games[gameIndex - 1][playerName][frameIndex]?.totalScores;
