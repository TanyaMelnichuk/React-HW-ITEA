import React, { Component } from 'react';

class Row extends Component {

    static defaultProps = {
        head: false
    };

    render = () => {
        let {children, head} = this.props;
        const childrenWithHead = React.Children.map(children, child =>
            React.cloneElement(child, {head: head})
        );
        return(
            <tr>
                {childrenWithHead}
            </tr>
        )
    };
}

export default Row;