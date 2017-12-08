import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../static/css/FirstScreen.css'

class FirstScreen extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='firstScreen'>
                我是首屏空白页
            </div>
        )
    }
}

export default connect()(FirstScreen)
