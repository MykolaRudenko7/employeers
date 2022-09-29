import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

import "./app.scss";

//
//
//

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      // кусок строки з пошуку по імені
      term: "",
      // тут буде вибраний фільтр
      filter: "",
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

  //   передаю масив для фільтрування і строку (з куском імені)
  serchEmp = (items, term) => {
    // якщо строка не введена, повертаю той же масив
    if (term.length === 0) {
      return items;
    }
    //  якщо в масиві у елементу був знайдений кусок строки, то поветраєм той елемент(індекс де була знайдена підстрока), якщо нвчого, і якщо буде більше чим -1 (бо -1 це нічого)
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  //   метод жля установку куска строки
  // приймає кусок строки і в стейті установлює його
  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  //   фільтр
  filterPost = (items, filter) => {
    switch (filter) {
      // підвищення
      case "rise":
        // премійовані об'єкти будуть включені в новиймасив
        return items.filter((item) => item.rise === true);
      // брейк в реакті не обов'язково
      case "more":
        return items.filter((item) => item.salary > 10000);
      // якщо нічого не буде, повертаю масив як є
      default:
        return items;
    }
  };

  //   змінюю в теперішньому стані фільтр
  onFilterSelect = (filter) => {
    // приходе строка фільтру і повертаєм її в стан
    this.setState({ filter });
  };

  render() {
    // дані із стейту
    const { data, term, filter } = this.state;
    // к-сть працівників
    const employeers = this.state.data.length;
    //  к-сть працівників, які отримають премію
    const increasedEmployeers = this.state.data.filter(
      (elem) => elem.increase
    ).length;

    //  видимі данні - масив який виводим
    //   масив, відфільтрований по строчці, яка нам приходить і заразом відфільтрований по зп і преміям
    const visibleData = this.filterPost(this.serchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          employeers={employeers}
          increasedEmployeers={increasedEmployeers}
        />
        <div className="searh-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />

          {/* передаю фільтр із стейту */}
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeersList
          // масив, відфільтрований (тепер я в дату передаю відфільтрований масив, що підходить по кусочку імені )
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
