import { useState } from "react";

const ObjectDisplay = ({displayedData, onSelect, connectionData }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    let getData = [];
    console.log("connectionData: ",connectionData)
   getData = displayedData
   if (connectionData.length !== 0) {
    getData = getData.filter(data => connectionData.includes(data.id))
   }
   console.log("getData: ",getData)
   
    const handleItemClick = (item) => {
        setSelectedItem(item);
        onSelect(item); // Передаем выбранный элемент в родительский компонент
      };
    return(
        <div>
            {getData.map(item => (
                // Отобразите данные для каждого элемента в соответствии с текущим displayType
                <div key={item.id} onClick={() => handleItemClick(item)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

export default ObjectDisplay;