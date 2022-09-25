import EmployeersListItem from "../employeers-list-item/employeers-list-item";

import "./employeers-list.css";

const EmployeersList = ({ data }) => {
  const elements = data.map((item) => {
   // return <EmployeersListItem name={item.name} salary={item.salary}  />;
    return <EmployeersListItem {...item}/>;
  });

  return <ul className="app-list list-group">
  {elements}
  </ul>;
};

export default EmployeersList;
