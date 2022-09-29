import "./app-filter.scss";

// класу і стану не буде, бо на кнопку нажали і вона виконала дію, стан не треба
const AppFilter = (props) => {
  // підхід із масивом кнопок
  // нейм - це строчки в фільтрі
  const butonsData = [
    { name: "all", label: "Всі працівники" },
    { name: "rise", label: "На підвищення" },
    { name: "more", label: "З/п більше 10000 грн" },
  ];
  //  в новий масив формую кнопку
  const buttons = butonsData.map(({ name, label }) => {
    // пропс я передав в апп (фільтр)
    // перемінна матиме тру )якщо ім'я з фільтру (апп) співпадаттиме з тим що у масиві кнопок) чи фалс
    const active = props.filter === name;

    //  клас активний на кнопку
    const clazz = active ? "btn-light" : "btn-outline-light";

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
