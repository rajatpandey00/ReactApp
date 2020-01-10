class IndecisionApp extends React.Component {
    render() {
        const options = ['Thing One', 'Thing Two']
        const title = 'Test Value'
      return (
        <div>
          <Header title={title} />
          <Options options={options} />
          <Action />
          <AddOptions />
        </div>
      )
    }
}

class Action extends React.Component {
    handlePickClick() {
        alert('Hello')
    }
    handleRemoveAllClick() {
        alert('Remove All')
    }
    render() {
        return (
           <div>
           <button onClick={this.handleRemoveAllClick}>Remove All</button>
            <button onClick={this.handlePickClick}>What should i do?</button>
           </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
           <div>
            <h1>{this.props.title}</h1>
            <h2>Put Your life in the hands of computer</h2>
           </div>
        )
    }
}

class AddOptions extends React.Component {
    render() {
        return (
        <div>
          AddOptions will be rendered here
        </div>
        )
    }
}

class Options extends React.Component {
    render() {
        const {
            options
        } = this.props
        return (
          <div>
            {options.map(option => 
                <Option key={option} optionText={option} />
                )}
            <Option />
          </div>
        )
    }
}
class Option extends React.Component {
    render() {
        const {
            optionText
        } = this.props
        return (
          <div>
            {optionText}
          </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))