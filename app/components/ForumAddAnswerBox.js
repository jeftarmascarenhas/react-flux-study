import React, {Component} from 'react';

export default class ForumAddAnswerBox extends Component {

    constructor() {
        super();
        this.state = { value:'' };
        this.addAnswer = this.addAnswer.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    addAnswer() {
        console.log(this.state.value);
        this.props.onAddAnswer(this.state.value);
    }

    _onChange (event) {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return(
            <div className="row">
                <textarea id="andAnswer" onChange={ this._onChange } className="col-md-6 col-xs-8">
                </textarea>
                <div className="col-md-6 col-xs-8">
                    <input type="button" className="btn btn-primary" value="Add" onClick={ this.addAnswer }/>
                </div>
            </div>
        );
    }
}