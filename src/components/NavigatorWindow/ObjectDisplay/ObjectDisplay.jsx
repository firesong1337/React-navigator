import './ObjectDisplay.css'
import {emptyAvatarHandler} from '../../Helper/Helper.js'


export const ObjectDisplay = ({displayedData, onSelect, connectionData }) => {

    emptyAvatarHandler(displayedData)

    let getData = displayedData

    if (connectionData.length !== 0) {
        getData = getData.filter(data => connectionData.includes(data.id))
    }
   
    const handleItemClick = (item) => {
        onSelect(item);
      };
    
    return(
        <div className="object-list">
            {getData.map(item => (
                <div key={item.id} onClick={() => handleItemClick(item)} className="object-item">
                    <img src={item.avatar} className="object-avatar"/>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}
