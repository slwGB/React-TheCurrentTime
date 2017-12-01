import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class LocalTime extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {localTime} = this.props
        return (
            <div>
                <h1>localtime {localTime}</h1>
            </div>
        )
    }
}

LocalTime.PropTypes = {
    localTime: PropTypes.string
}