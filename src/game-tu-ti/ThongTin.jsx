import React, { Component } from 'react'
import {connect} from 'react-redux'
class ThongTin extends Component {
    render() {
        const {soBanThang, soBanChoi} = this.props
        return (
            <div className='thongTin'>
                <h1 className='text-success'>Số bàn thắng: <span className='text-warning'>{soBanThang}</span></h1>
                <h1 className='text-success'>Số bàn chơi: <span className='text-warning'>{soBanChoi}</span></h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    soBanThang: state.gameTuTiReducers.soBanThang,
    soBanChoi: state.gameTuTiReducers.soBanChoi,
})

export default connect(mapStateToProps)(ThongTin)