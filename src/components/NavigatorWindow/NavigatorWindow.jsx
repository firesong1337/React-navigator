import { useEffect, useState } from "react";
import { ObjectConnections } from "./ObjectConnections/ObjectConnections";
import { ObjectDisplay } from "./ObjectDisplay/ObjectDisplay";
import { ObjectDisplayChosen } from "./ObjectDisplayChosen";
import { ObjectNav } from "./ObjectNav/ObjectNav";
import { users, groups, meetings } from "../data/data.js";
import "./NavigatorWindow.css";
import { ItemSelection } from "../Helper/Helper.js";

export const NavigatorWindow = () => {
  const [displayedData, setDisplayData] = useState([]); // основной список
  const [selectedItem, setSelectedItem] = useState({ name: "", avatar: "" }); // выбранный элемент, null
  const [connectedObjects, setConnectedObjects] = useState([
    {
      name: "",
      value: [],
    },
  ]); // связанные объекты
  const [isConnectionSelected, setSelectedConnection] = useState(false); // выбрали ли соединение
  const [connectionData, setConnectionData] = useState([]); // данные о связанных элементах

  // хорошо, что логика вынесена в функции
  // плохо, что в реактовские
  const changeDataDisplay = (type) => {
    setDisplayData(type);
    console.log(displayedData);
    setSelectedItem({ name: "", avatar: "" });
  };

  const handleItemSelect = (item) => {
    ItemSelection(item, setSelectedItem, setConnectedObjects);
  };

  const changeConnectionDisplay = (type, value) => {
    setDisplayData(type);
    setSelectedConnection(true);
    setConnectionData(value);
  };

  const resetItems = () => {
    setDisplayData([]);
    setSelectedItem({ name: "", avatar: "" });
    setConnectedObjects([{ name: "", value: [] }]);
    setSelectedConnection(false);
    setConnectionData([]);
  };
  return (
    <div className="navigator-window">
      <ObjectDisplayChosen selectedItem={selectedItem} />
      <ObjectNav
        users={users}
        groups={groups}
        meetings={meetings}
        onSelectChange={changeDataDisplay}
        onResetData={resetItems}
      />
      <ObjectDisplay
        displayedData={displayedData}
        onSelect={handleItemSelect}
        connectionIfSelected={isConnectionSelected}
        connectionData={connectionData}
      />
      <ObjectConnections
        users={users}
        groups={groups}
        meetings={meetings}
        connectedObjects={connectedObjects}
        onDisplayChange={changeConnectionDisplay}
      />
    </div>
  );
};
