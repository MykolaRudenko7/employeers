import EmployeersListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.scss";

// тут я уже показую відфільтровану дату
const EmployeersList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    // деструктуризація, витягую id, потім все остальне в itemProps
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        key={id}
        {...itemProps}
        //   видаляю елемент по айді
        onDelete={() => onDelete(id)}
        //   тут при події визиваю ф-цію і передаю в неї айді нажатого елементу і значення атрибуту у об'єкту події (проп зі значенням властивості у даті)
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  //  вивожу верхні елементи тут
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
