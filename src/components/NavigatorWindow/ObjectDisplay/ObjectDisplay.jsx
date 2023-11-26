import { useState } from "react";

const ObjectDisplay = ({displayedData, users, groups, meetings, onSelect,  connectionIfSelected, connectionData }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    let getData = [];
    console.log(connectionData)
    if (connectionData.length == 0) {
        switch (displayedData) {
            case 'users':
                getData = users;
                break;
            case 'groups':
                getData = groups;
                break;
            case 'meetings':
                getData = meetings;
                break;
            default:
                getData = [];
        }
    } else {
        switch (displayedData) {
            case 'users':
                getData = users.filter(user => connectionData.includes(user.id));
                break;
            case 'groups':
                getData = groups.filter(group => connectionData.includes(group.id));
                break;
            case 'meetings':
                getData = meetings.filter(meeting => connectionData.includes(meeting.id));
                break;
            default:
                getData = [];
        }
    }
    
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