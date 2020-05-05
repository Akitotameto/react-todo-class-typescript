import React, { Component } from 'react';
import Header from  '../components/header'
import Form from  '../components/form'

class Set extends Component {
    render() {
        return(
            <div>
                <Header history={this.props.history} index={2} />
                <h1>登録画面</h1>
                <Form />
            </div>
        )
    }
}

export default Set;