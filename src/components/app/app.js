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
        {
          name: "Григорій Сковорода",
          salary: 800,
          increase: true,
          rise: false,
          id: 1,
        },
        {
          name: "Тарас Шевченко",
          salary: 3000,
          increase: false,
          rise: true,
          id: 2,
        },
        {
          name: "Іван Франко",
          salary: 15000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // Метод filter() создаёт НОВИЙ массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
      return {
        // ті ел айді яких неспівпадає з нажатим
        data: data.filter((elem) => elem.id !== id),
      };
    });
  };

  //ф-ція додавання нового об'єкту (приймає ім'я і зп)
  addItem = (name, salary) => {
    if (name.length > 3 && salary.length > 3) {
      // новий ою'єкт складається з: імені, зп, премія, айді
      const newItem = {
        name,
        salary,
        increase: false,
        rise: false,
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
    } 
  };

  //   onToggleIncrease = (id) => {
  //     // 1
  //     //  this.setState(({ data }) => {
  //     // // отрим індекс елементу з яким працюю
  //     // const index = data.findIndex((elem) => elem.id === id);
  //     // // в старих даних цей об'єкт
  //     // const old = data[index];
  //     // // ! новий синтаксис дані розвернуться і сформують новий об'єкт, і додою нові властивості, якщо вони будуть співпадати з старими, то замінять їх
  //     // // бере значення і записує його на протилежне
  //     // const newItem = { ...old, increase: !old.increase };
  //     // const newArr = [
  //     //   ...data.slice(0, index),
  //     //   newItem,
  //     //   ...data.slice(index + 1),
  //     // ];
  //     // return {
  //     //   data: newArr,
  //     // };
  //     //  });

  //     //  2
  //     this.setState(({ data }) => ({
  //       // map-ом повертаю новий об'єкт
  //       data: data.map((item) => {
  //         // якщо  айді елементу дорівнює наджтому айді
  //         if (item.id === id) {
  //           // повертаю всі ел так само, окрім премії
  //           return { ...item, increase: !item.increase };
  //         }
  //         // якщо ні, то вертаю як було
  //         return item;
  //       }),
  //     }));
  //   };

  //   onToggleRise = (id) => {
  //     this.setState(({ data }) => ({
  //       // map-ом повертаю новий об'єкт
  //       data: data.map((item) => {
  //         // якщо  айді елементу дорівнює наджтому айді
  //         if (item.id === id) {
  //           // повертаю всі ел так само, окрім премії
  //           return { ...item, rise: !item.rise };
  //         }
  //         // якщо ні, то вертаю як було
  //         return item;
  //       }),
  //     }));
  //   };
  //  											uneversal
  //
  // ідентифікатор і що міняю
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      // map-ом повертаю новий об'єкт
      data: data.map((item) => {
        // якщо  айді елементу дорівнює наджтому айді
        if (item.id === id) {
          // повертаю всі ел так само, окрім тих, що з зззаданою властивістю
          return { ...item, [prop]: !item[prop] };
        }
        // якщо ні, то вертаю як було
        return item;
      }),
    }));
  };

  render() {
    // к-сть працівників
    const employeers = this.state.data.length;
    //  к-сть працівників, які отримають премію
    const increasedEmployeers = this.state.data.filter(
      (elem) => elem.increase
    ).length;

    return (
      <div className="app">
        <AppInfo
          employeers={employeers}
          increasedEmployeers={increasedEmployeers}
        />
        <div className="searh-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeersList
          // ! 'прокидую вниз' в ліст
          data={this.state.data}
          onDelete={this.deleteItem}
          //
          //
          // кидаю ф-цію через проп в ліст
          onToggleProp={this.onToggleProp}
        />
        <EmployeersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
