import React, { Component } from 'react'
import PropTypes from 'prop-types'

const themed = (WrappedComponent) => {
    const t = class extends Component {
        render () {
            return (
                <WrappedComponent
                    {...this.props}
                    theme={this.context.theme}
                />
            )
        }
    }

    t.contextTypes = {
        theme: PropTypes.object
    }

    return t
}

export default themed
