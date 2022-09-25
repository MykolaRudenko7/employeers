import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employeers-list/employeers-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="searh-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeersList />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
