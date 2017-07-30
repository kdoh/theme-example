import { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
    getChildContext () {
        return { theme: this.props.theme }
    }
    render () {
        return this.props.children
    }
}

ThemeProvider.childContextTypes = {
    theme: PropTypes.object
}

export default ThemeProvider
