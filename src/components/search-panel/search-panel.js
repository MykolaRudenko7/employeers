import { Component } from "react";

import "./search-panel.scss";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  //   local
  onUpdateSearch = (e) => {
    // коли виникає подія, записую її дані в перемінну
    const term = e.target.value;
    // установлюю локальний стан ( так правильно, спочатку локальний, тоді в апп)
    this.setState({ term: term });

    //  ! передаю наверх
    // тут той метод, що прийшов з пропсів, з іншого компоненту
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control serch input"
        placeholder="Пошук працівника"
        value={this.state.term}
        //  викликаю локальну ф-цію при зміні
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default SearchPanel;
