import { useState } from "react";

const ObjectNav= ({ users, groups, meetings, onSelectChange }) => {
    return(
            <nav>
                <button onClick={() => onSelectChange(users)}>Users</button>
                <button onClick={() => onSelectChange(groups)}>Groups</button>
                <button onClick={() => onSelectChange(meetings)}>Meetings</button>
            </nav>
    )
}

export default ObjectNav;