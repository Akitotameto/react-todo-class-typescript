import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    onChange = (key, value) => {
        console.log('key', key)
        console.log('value', value)
        this.setState({
            [key]: value
        });
    }

    send(){
        console.log('テスト')
    }

    render() {
        return(
            <div>
                <label>タイトル</label><br />
                <input type="text" value={this.state.title} onChange={e => this.onChange('title', e.target.value)} /><br />

                <label>内容</label><br />
                <textarea type="text" value={this.state.content} onChange={e => this.onChange('content', e.target.value)}/><br />

                <label>カテゴリ</label><br />
                <input type="text" value={this.state.category} onChange={e => this.onChange('category', e.target.value)}/><br />

                <button onClick={this.send}>送信</button>
            </div>
        )
    }
}

export default Form;