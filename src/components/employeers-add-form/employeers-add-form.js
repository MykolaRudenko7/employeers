import "./employeers-add-form.css";
import { Component } from "react";

class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      // значення інпуту що було всередині ел
      // звертаюсь до атрибута(нейм) елементу
      //записую властивість в об'єкт
      // 1н обработчик на 2х інпутах
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Додати нового працівника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Ім'я працівника?"
            // призначаю атрибут
            name="name"
            // управляємі компоненти
            // запис актуального значення форми, на вісі зміни реакт реагує мииттєво
            value={name}
            // коли вводим данні без 2й прив'язки, то вони зберігаються тільки всередині самої формочки на сайті
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в гривнях?"
            // призначаю атрибут
            name="salary"
            // управляємі компоненти
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
