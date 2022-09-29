import "./employeers-list-item.scss";

const EmployeersListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, rise } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  //  якщо ллайк буде фалс- класу не буде
  // якщо тру, то дабавляю
  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        // якщо клік на ім'я, то визиваю ф-цію
        onClick={onToggleProp}
        data-toggle="rise"
        //   інлайн стилі приймають об'єкт
        // якщо одиниця виміру без величини, то за замовчуванням px
        //   style={{fontSize: 20}}

        style={{ fontSize: "1rem" }}
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
          onClick={onToggleProp}
          // в ліст я буду отримувати значення цього атрибуту
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeersListItem;
