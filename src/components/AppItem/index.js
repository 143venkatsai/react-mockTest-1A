import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, inputValue: ''}

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, inputValue} = this.state

    return (
      <div className="app-container">
        <div className="app-item">
          <h1 className="heading">Editable text input</h1>
          <div className="input-container">
            {isClicked ? (
              <div className="para-container">
                <p className="para">{inputValue}</p>
                <button
                  type="button"
                  className="edit-button"
                  onClick={this.onClickButton}
                >
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={inputValue}
                  className="input-element"
                  onChange={this.onChangeInputValue}
                />
                <button
                  type="button"
                  className="save-button"
                  onClick={this.onClickButton}
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
