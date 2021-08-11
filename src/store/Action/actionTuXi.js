import * as gameTuXi from '../Constant/ConstanTuXi'

export const actTuXi = tuXi => ({
    type: gameTuXi.CHON_TU_XI,
    payload: tuXi
})
export const actPlayGame = () => ({
    type: gameTuXi.PLAY_GAME,
})