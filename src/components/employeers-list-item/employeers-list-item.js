import "./employeers-list-item.css";
import { Component } from "react";

class EmployeersListItem extends Component {
  constructor(props) {
    super(props);
    // стан
    this.state = {
      increase: false,
      // 1 стан 'лайк'
      like: false,
    };
  }

  onIncrease = () => {
    // 1. витягую increase (те саме що й - state.increase)
    // 2. неявно вертаю =()> ({}) (дужки замість return) ) об'єrn із set.state
    // 3. всередині встановлюєм властивість протилежну тій, яка вказана
    // 4. із за того що колбек, відталкуємся від попереднього результату
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  // 2
  onLike = () => {
    this.setState(({ like }) => ({
      // якщо клацнем, то буде тру
      like: !like,
    }));
  };

  // виводить
  render() {
    const { name, salary } = this.props;
    const { increase, like } = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    //  якщо ллайк буде фалс- класу не буде
    // якщо тру, то дабавляю
    if (like) {
      classNames += " like";
    }

    return (
      <li className={classNames}>
        <span
          className="list-group-item-label"
          // якщо клік на ім'я, то визиваю ф-цію
          onClick={this.onLike}
        >
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "UAN"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeersListItem;
