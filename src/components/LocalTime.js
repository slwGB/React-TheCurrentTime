import React, {Component} from 'react'
import PropTypes from 'prop-types'
import timeFormat from '../library/timeFormat'
import '../static/css/LocalTime.css'

export default class LocalTime extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {localTime} = this.props
        return (
            <div className='localTimeBox'>
                <div className='localTimeDate'>
                    {timeFormat(localTime, 'yyyy年MM月dd日')}
                </div>
                <div className='localTimeTime'>
                    <span>{timeFormat(localTime, 'hh : mm : ')} </span>
                    <span> {timeFormat(localTime, 'ss')}</span>
                </div>
            </div>
        )
    }
}

LocalTime.propTypes = {
    localTime: PropTypes.string
}
