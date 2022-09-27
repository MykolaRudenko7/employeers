import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // щоб оновлювалось
      data: [
        { name: "Григорій Сковорода", salary: 800, increase: true, id: 1 },
        { name: "Тарас Шевченко", salary: 3000, increase: false, id: 2 },
        { name: "Іван Франко", salary: 15000, increase: true, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // ІММУТАБЕЛЬНІСТЬ
      // state мінять не можна! тільки копію
      // Метод filter() создаёт НОВИЙ массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
      return {
        // ті ел айді яких неспівпадає з нажатим
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  //
  //
  //
  //ф-ція додавання нового об'єкту (приймає ім'я і зп)
  addItem = (name, salary) => {
    // новий ою'єкт складається з: імені, зп, премія, айді
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    //  в стан прописую  новий стан об'єкту
    this.setState(({ data }) => {
      // новий масив міститиме старі об'єкти + новий
      const newArr = [...data, newItem];
      // повертаю новий масив у стан
      return {
        data: newArr,
      };
    });
  };
  //
  //
  //

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="searh-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeersList data={this.state.data} onDelete={this.deleteItem} />
        {/* в проп предаєм  метод addItem */}
        <EmployeersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
