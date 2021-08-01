// Snippet for debugging euler angles (caching the DiceBox and diecemodel in CONFIG.DCC as a quick hack)

setInterval(() => { CONFIG.DCC.db.swapTestEuler(CONFIG.DCC.dm, [1,0,0]) }, 30 )
