import * as gameTuXi from "../Constant/ConstanTuXi";

const initiaState = {
  tuTiList: [{ hinhAnh: "./image/video_23_game_oan_tu_ti/keo.png" }],
  tuXi: [{ button1: true }, { button2: false }, { button3: false }],
  number: 1,
  soBanThang: 0,
  soBanChoi: 0,
};

const gameTuTiReducers = (state = initiaState, { type, payload }) => {
  switch (type) {
    case gameTuXi.CHON_TU_XI: {
      if (payload === 1) {
        return {
          ...state,
          tuXi: [{ button1: true }, { button2: false }, { button3: false }],
          number: 1,
        };
      }
      if (payload === 2) {
        return {
          ...state,
          tuXi: [{ button1: false }, { button2: true }, { button3: false }],
          number: 2,
        };
      }
      if (payload === 3) {
        return {
          ...state,
          tuXi: [{ button1: false }, { button2: false }, { button3: true }],
          number: 3,
        };
      }
    }
    case gameTuXi.PLAY_GAME: {
      state.soBanChoi += 1;
      let randomImage = Math.floor(Math.random() * 3) + 1;
      switch (randomImage) {
        case 1: {
          state.tuTiList = [
            { hinhAnh: "./image/video_23_game_oan_tu_ti/keo.png" },
          ];
          if (state.number == 3) {
            state.soBanThang += 1;
          }
          return {
            ...state,
          };
        }
        case 2: {
          state.tuTiList = [
            { hinhAnh: "./image/video_23_game_oan_tu_ti/bua.png" },
          ];
          if (state.number == 2) {
            state.soBanThang += 1;
          }
          return {
            ...state,
          };
        }
        case 3: {
          state.tuTiList = [
            { hinhAnh: "./image/video_23_game_oan_tu_ti/bao.png" },
          ];
          if (state.number == 1) {
            state.soBanThang += 1;
          }
          return {
            ...state,
          };
        }
      }
    }
    default:
      return state;
  }
};
export default gameTuTiReducers;
