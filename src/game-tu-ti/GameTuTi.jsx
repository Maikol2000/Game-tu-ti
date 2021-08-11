import React, { Component } from "react";
import "./assec/font/buble.css";
import ThongTin from "./ThongTin";
import { connect } from "react-redux";
import {actPlayGame, actTuXi} from '../store/Action/actionTuXi'
class GameTuTi extends Component {
  render() {
    const { tuXi, chonTuXi, playGame } = this.props;
    const { button1} = actTuXi(tuXi).payload[0]
    const { button2} = actTuXi(tuXi).payload[1]
    const { button3} = actTuXi(tuXi).payload[2]
    return (
      <div className="bgAvenger">
        <div style={{ marginRight: "0" }} className="row">
          <div className="col-4">
            <div className="bgIconTuXi">
              {button1 && <img className="iconTuXi" src="./image/video_23_game_oan_tu_ti/keo.png" />}
              {button2 && <img className="iconTuXi" src="./image/video_23_game_oan_tu_ti/bao.png" />}
              {button3 && <img className="iconTuXi" src="./image/video_23_game_oan_tu_ti/bua.png" />}
            </div>
            <img
              className="icon__avenger"
              src="./image/video_23_game_oan_tu_ti/player.png"
            />
            <div>
              <button className={`${tuXi[0].button1 && 'btnTuXi'}`} onClick={() => chonTuXi(1)}>
                <img
                  className="iconTuXi tuXi "
                  src="./image/video_23_game_oan_tu_ti/keo.png"
                />
              </button>
              <button className={`mr-4 ml-4 ${tuXi[1].button2 && 'btnTuXi'}`} onClick={() => chonTuXi(2)}>
                <img
                  className="iconTuXi tuXi"
                  src="./image/video_23_game_oan_tu_ti/bao.png"
                />
              </button>
              <button className={`${tuXi[2].button3 && 'btnTuXi'}`} onClick={() => chonTuXi(3)}>
                <img
                  className="iconTuXi tuXi "
                  src="./image/video_23_game_oan_tu_ti/bua.png"
                />
              </button>
            </div>
          </div>
          <div className="col-4 h-25">
            <p className="avenger-text pt-5">
              I'm iron man, i love you 3000 !!
            </p>
          </div>
          <div className="col-4">
            <div className="bgIconTuXi">
              {this.props.mangTuXi.map((tuXi, idx) => {
                return <img src={tuXi.hinhAnh} className="iconTuXi" />;
              })}
            </div>
            <img
              className="icon__avenger"
              src="./image/video_23_game_oan_tu_ti/playerComputer.png"
            />
          </div>
        </div>
        <ThongTin />
        <button className="btn btn-success" onClick={() => playGame()}>Play game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangTuXi: state.gameTuTiReducers.tuTiList,
  tuXi: state.gameTuTiReducers.tuXi,
});
const mapDispatchToProp = dispatch => ({
  chonTuXi: tuXi => {
    dispatch(actTuXi(tuXi))
  },
  playGame: () => {
    dispatch(actPlayGame())
  }
})
export default connect(mapStateToProps, mapDispatchToProp)(GameTuTi);
