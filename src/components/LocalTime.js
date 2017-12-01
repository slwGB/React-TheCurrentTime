import React, {Component} from 'react'
import PropTypes from 'prop-types'
import timeFormat from '../library/timeFormat'

export default class LocalTime extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {localTime} = this.props
        return (
            <div>
                <h1>{timeFormat(localTime,'yyyy年MM月dd日 hh:mm:ss')}</h1>
            </div>
        )
    }
}

LocalTime.PropTypes = {
    localTime: PropTypes.string
}