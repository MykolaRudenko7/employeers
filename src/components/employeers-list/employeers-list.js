import EmployeersListItem from "../employeers-list-item/employeers-list-item";
import "./employeers-list.css";

const EmployeersList = ({ data, onDelete }) => {
  const elements = data.map((item) => {
    // деструктуризація, витягую id, потім все остальне в itemProps
    const { id, ...itemProps } = item;
    return (
      <EmployeersListItem
        key={id}
        {...itemProps}
		//   видаляю елемент по айді
        onDelete={() => onDelete(id)}
      />
    );
  });

  //  вивожу верхні елементи тут
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
