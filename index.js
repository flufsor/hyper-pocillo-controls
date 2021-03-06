'use strict'

const isWin = process.platform === 'win32';
let dirname = __dirname;
const remote = require('electron').remote;

// Windows needs a regex because reasons
if (isWin == true) {
    dirname == dirname.replace(/\\/g, '/');
}

exports.decorateConfig = (config) => {
    const controlLeft = config.showWindowControls;
    
    const pocilloConfig = {
        height: '35px',
        borderColor: '#565a67',
        marginWidth: '89px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, Roboto, Oxygen, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        svgFill: '#afb1b7',
        iconSize: '24px',
        hoverBg: '#565965',
        closeBg: '#a34f6d',
        closeHover: '#b16983'
    }

    if(controlLeft == 'left') {
        return Object.assign({}, config, {
            css: `
                ${config.css || ''}
                .header_header {
                    display: flex;
                    flex-direction: row-reverse;
                    top: 1px !important;
                    left: 1px !important;
                    right: 1px !important;
                }
                .header_windowHeader {
                    width: calc(100% - ${pocilloConfig.marginWidth});
                    height: ${pocilloConfig.height};
                    margin-left: ${pocilloConfig.marginWidth};
                    border: 0 !important;
                }
                .header_windowHeader .header_hamburgerMenuLeft,
                .header_windowHeader .header_hamburgerMenuRight {
                    width: 40px;
                    height: ${pocilloConfig.height};
                    padding: 0 15px;
                }
                .tabs_nav {
                    width: 100%;
                    top: ${pocilloConfig.height};
                }
                .header_windowControls {
                    display: none;
                }
                .header_appTitle {
                    margin-left: -${pocilloConfig.marginWidth};
                    font-family: ${pocilloConfig.fontFamily}
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                }
                .pocillo_header {
                    position: absolute;
                    right: auto !important;
                    left: 0 !important;
                    width: ${pocilloConfig.marginWidth};
                    height: ${pocilloConfig.height};
                    padding-right: 0 !important;
                    padding-left: 5px !important;
                }
                .pocillo_actions {
                    display: flex;
                    flex-direction: row-reverse !important;
                    align-items: center;
                    justify-content: space-between;
                    height: ${pocilloConfig.height};
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                .pocillo_actions > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;                
                    width: ${pocilloConfig.iconSize};
                    height: ${pocilloConfig.iconSize};
                    border-radius: 50%;
                }
                .pocillo_actions > li > svg {
                    width: ${pocilloConfig.iconSize};
                    height: ${pocilloConfig.iconSize};
                }
                .pocillo_actions > li > svg path {
                    fill: ${pocilloConfig.svgFill} !important;
                }
                .pocillo_actions > li:hover,
                .pocillo_actions > li:active {
                    background-color: ${pocilloConfig.hoverBg};
                }
                .pocillo_actions > li:hover > svg path,
                .pocillo_actions > li:active > svg path {
                    fill: #fff !important;
                }
                .pocillo_actions > li.pocillo_close {
                    background-color: ${pocilloConfig.closeBg};
                }
                .pocillo_actions > li.pocillo_close:hover,
                .pocillo_actions > li.pocillo_close:active {
                    background-color: ${pocilloConfig.closeHover};
                }
                .pocillo_actions > li.pocillo_close > svg path,
                .pocillo_actions > li.pocillo_close:hover > svg path,
                .pocillo_actions > li.pocillo_close:active > svg path {
                    fill: #fff !important;
                }
            `
        })
    }

    if(controlLeft == false) {
        return Object.assign({}, config, {
            css: `
                ${config.css || ''}
                .header_header {
                    display: flex;
                    top: 1px !important;
                    left: 1px !important;
                    right: 1px !important;
                }
                .header_windowHeader {
                    width: 100%;
                    height: ${pocilloConfig.height};
                    border: 0 !important;
                }
                .header_windowHeader .header_hamburgerMenuLeft,
                .header_windowHeader .header_hamburgerMenuRight {
                    width: 40px;
                    height: ${pocilloConfig.height};
                    padding: 0 15px;
                }
                .tabs_nav {
                    width: 100%;
                    top: ${pocilloConfig.height};
                }
                .header_windowControls {
                    display: none;
                }
                .header_appTitle {
                    font-family: ${pocilloConfig.fontFamily};
                    font-size: 14px;
                    font-weight: 700;
                    color: #fff;
                }
                .pocillo_header {
                    position: absolute;
                    top: -1000%;
                    display: none;
                    visibility: hidden;
                    opacity: 0;
                }
            `
        })
    }
    
    return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .header_header {
                display: flex;
                top: 1px !important;
                left: 1px !important;
                right: 1px !important;
            }
            .header_windowHeader {
                width: calc(100% - ${pocilloConfig.marginWidth});
                height: ${pocilloConfig.height};
                border: 0 !important;
            }
            .header_windowHeader .header_hamburgerMenuLeft,
            .header_windowHeader .header_hamburgerMenuRight {
                width: 40px;
                height: ${pocilloConfig.height};
                padding: 0 15px;
            }
            .tabs_nav {
                width: 100%;
                top: ${pocilloConfig.height};
            }
            .header_windowControls {
                display: none;
            }
            .header_appTitle {
                margin-left: ${pocilloConfig.marginWidth};
                font-family: ${pocilloConfig.fontFamily};
                font-size: 14px;
                font-weight: 700;
                color: #fff;
            }
            .pocillo_header {
                position: absolute;
                right: 0;
                width: ${pocilloConfig.marginWidth};
                height: ${pocilloConfig.height};
                padding-right: 5px;
            }
            .pocillo_actions {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: ${pocilloConfig.height};
                margin: 0;
                padding: 0;
                list-style-type: none;
            }
            .pocillo_actions > li {
                display: flex;
                align-items: center;
                justify-content: center;                
                width: ${pocilloConfig.iconSize};
                height: ${pocilloConfig.iconSize};
                border-radius: 50%;
            }
            .pocillo_actions > li > svg {
                width: ${pocilloConfig.iconSize};
                height: ${pocilloConfig.iconSize};
            }
            .pocillo_actions > li > svg path {
                fill: ${pocilloConfig.svgFill} !important;
            }
            .pocillo_actions > li:hover,
            .pocillo_actions > li:active {
                background-color: ${pocilloConfig.hoverBg};
            }
            .pocillo_actions > li:hover > svg path,
            .pocillo_actions > li:active > svg path {
                fill: #fff !important;
            }
            .pocillo_actions > li.pocillo_close {
                background-color: ${pocilloConfig.closeBg};
            }
            .pocillo_actions > li.pocillo_close:hover,
            .pocillo_actions > li.pocillo_close:active {
                background-color: ${pocilloConfig.closeHover};
            }
            .pocillo_actions > li.pocillo_close > svg path,
            .pocillo_actions > li.pocillo_close:hover > svg path,
            .pocillo_actions > li.pocillo_close:active > svg path {
                fill: #fff !important;
            }
        `
    })
};

exports.decorateHeader = (Hyper, { React }) => {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                window: null,
                maximized: false
            }

            this.closeApp = this.closeApp.bind(this);
            this.minimizeApp = this.minimizeApp.bind(this);
            this.maximizeApp = this.maximizeApp.bind(this);
        }
        
        closeApp() {
            this.state.window.close();
        }

        minimizeApp() {
            this.state.window.minimize();
            this.state.maximized = false;
        }

        maximizeApp() {
            if (this.state.maximized == true) {
                this.state.window.unmaximize();
                this.state.maximized = false;
            } else {
                this.state.window.maximize();
                this.state.maximized = true;
            }
        }

        render() {
            return (
                React.createElement(Hyper, Object.assign({}, this.props, {
                    customChildren: React.createElement('div', { className: 'pocillo_header' },
                        React.createElement('ul', { className: 'pocillo_actions' },
                            React.createElement('li', { onClick: this.minimizeApp },
                                React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
                                    React.createElement('path', { d: 'm8 14h8v2h-8z' })
                                )
                            ),

                            // As this is from the Faba icon theme, this needs its '<g>' element
                            React.createElement('li', { onClick: this.maximizeApp },
                                React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
                                    React.createElement('g', { transform: 'matrix(1,0,0,1,-537,60.0034)' },
                                        React.createElement('path', { d: 'M548,-52.003L549.781,-50.222L548.281,-48.722L546.781,-47.222L545,-49.003L545,-44.003L550,-44.003L548.219,-45.785L549.719,-47.285L551.219,-48.785L553,-47.003L553,-52.003L548,-52.003Z' })
                                    )                                    
                                )
                            ),

                            React.createElement('li', { className: 'pocillo_close', onClick: this.closeApp },
                                React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24' },
                                    React.createElement('path', { d: 'm9.41 8l-1.41 1.41 2.59 2.59-2.59 2.59 1.41 1.41 2.59-2.59 2.59 2.59 1.41-1.41-2.59-2.59 2.59-2.59-1.41-1.41-2.59 2.59-2.59-2.59z' })
                                )
                            )
                        )
                    )
                }))
            )
        }

        componentDidMount() {
            this.state.window = remote.getCurrentWindow();
        }
    }
}
