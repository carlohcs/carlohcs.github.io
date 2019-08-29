import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <style jsx global>{`
                header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding: 20px;
                }

                header div {
                    display: block;
                }
            `}</style>
                <header>
                    <div>
                        MENU
                    </div>

                    <div>
                        PT-BR | EN
                    </div>
                </header>
            </div>
        )
    }
}

export default Header