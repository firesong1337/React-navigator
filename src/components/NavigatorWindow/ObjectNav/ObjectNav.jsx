import { useState } from "react";
import './ObjectNav.css'

const NavConfig = [
    {
        id: 'users',
        label: 'Пользователи'
    },    {
        id: 'groups',
        label: 'Группы'
    },

]

const defaultSelected = NavConfig.at(0).id


/**
 * + семантика
 * 
 * - SR
 * - расширяемость
 * - нарушение event pattern
*/
export const ObjectNav= ({ users, groups, meetings,props, onSelectChange, onResetData }) => {
    const [selected, setSelected] = useState(defaultSelected)

    const handleSelect = (item) => {
        setSelected(item)
        onSelectChange(item)
    }

    const handleReset = () => {
        setSelected(defaultSelected)
        onResetData(defaultSelected)
    }


    return(
            <nav className="navbar">
                {NavConfig.map(item => (<li><button onClick={() => handleSelect(item.id)}>{item.label}</button></li>))}
                <ul>
                    <li><button onClick={() => onSelectChange(users)}>Users</button></li>
                    <li><button onClick={() => onSelectChange(groups)}>Groups</button></li>
                    <li><button onClick={() => onSelectChange(meetings)}>Meetings</button></li>
                    <li><button onClick={() => onSelectChange(props)}>Props</button></li>
                </ul>
                <ul>
                    <li><button className="contrast" onClick={() => onResetData()}>Reset</button></li>
                </ul>
            </nav>
    )
}