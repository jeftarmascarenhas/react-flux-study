import React, {Component} from 'react';

export default class ForumAddAnswerBox extends Component {

    constructor() {
        super();
        this.state = { value:'' };
        this.addAnswer = this.addAnswer.bind(this);
        this._onChange = this._onChange.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    addAnswer(event) {
        this.props.onAddAnswer(this.state.value);
    }

    _onChange (event) {
        let isValid = this.isValid(event.target);

        this.setState({
            value: event.target.value
        });


    }

    isValid(input) {
        if(input.required != null && input.value === '') {
            input.classList.add('error');
            input.nextSibling.textContent = 'Por favor informe sua resposta';
            return false;
        }
        else {
            input.classList.remove('error');
            input.nextSibling.textContent = '';
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-6 col-xs-4">
                    <div className="form-group">
                        <textarea id="andAnswer" className="form-control" onChange={ this._onChange } required>
                        </textarea>
                        <p></p>
                    </div>
                </div>
                <div className="col-md-6 col-xs-8">
                    <input type="button" className="btn btn-primary" value="Add" onClick={ this.addAnswer }/>
                </div>
            </div>
        );
    }
}