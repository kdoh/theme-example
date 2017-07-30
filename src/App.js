import React, { Component } from 'react';

import ThemeProvider from './ThemeProvider'

import DangerButton from './DangerButton'
import PrimaryButton from './PrimaryButton'

class App extends Component {
    state = {
        theme: {
            primary: '#509ee3',
            danger: 'red',
        }
    }

    setThemeColor = (key, val) => {
        this.setState({
            theme: Object.assign(
                {},
                this.state.theme, {
                    [key]: val
                })
        })
    }
    render() {
        const { theme } = this.state
        return (
            <ThemeProvider theme={this.state.theme}>
                <div>
                    <div>Themes</div>

                    <div>
                        <input
                            type="text"
                            value={theme.primary}
                            onChange={(ev) =>
                                this.setThemeColor('primary', ev.target.value)
                            }
                        />
                        <input
                            type="text"
                            value={theme.danger}
                            onChange={(ev) =>
                                this.setThemeColor('danger', ev.target.value)
                            }
                        />
                    </div>

                    <div>
                        <PrimaryButton onClick={() => alert('Primary button click')}>
                            Primary button
                        </PrimaryButton>
                        
                        <DangerButton onClick={() => alert('Tick tick tick')}>
                            Danger button
                        </DangerButton>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
