import './ObjectConnections.css'

export const ObjectConnections = ({users, groups, meetings, connectedObjects, onDisplayChange}) => {

    const handleConnectionClick = (type, value) => {
        switch(type) {
            case "users": type = users 
            break
            case "groups": type = groups 
            break
            case "meetings": type = meetings 
            break
        }
        onDisplayChange(type, value); 
    }

    return(
        <div className="connected-objects">
            {connectedObjects.map((obj,index) => (
                obj.value.length !== 0 && (
                <div 
                key={index} 
                onClick={() => handleConnectionClick(obj.name, obj.value)}
                className="secondary connected-item" role="button">
                    <span>{obj.name}</span>
                    <div className="connected-item-length">{obj.value.length}</div>
                </div>)
            ))}
        </div>
    )
}
