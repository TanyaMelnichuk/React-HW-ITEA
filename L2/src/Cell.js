import React, { Component } from 'react';

class Cell extends Component {

    static defaultProps = {
        type: 'text',
        background: 'transparent',
        color: 'black'
    };

    render = () => {
        let {children, type, currency, background, color, head} = this.props;

        if(head)
            return (
                <th>{children}</th>
            );

        return (
            <td style={{background: background, color: color }} className={type}>
                {children}
                {currency}
            </td>
        )
    };
}

export default Cell;