import "./app-info.scss";

const AppInfo = ({ employeers, increasedEmployeers }) => {
  return (
    <div className="app-info">
      <h1>Облік працівників фірми </h1>
      <h2>Загальна кількіть працівників: {employeers}</h2>
      <h2>Премію отримають: {increasedEmployeers}</h2>
    </div>
  );
};

export default AppInfo;
