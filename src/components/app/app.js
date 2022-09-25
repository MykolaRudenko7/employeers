import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

function App() {
  const data = [
    { name: "Григорій Сковорода", salary: 800, increase: true },
    { name: "Тарас Шевченко", salary: 3000, increase: false },
    { name: "Іван Франко", salary: 15000, increase: true },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="searh-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeersList data={data} />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
