import NavigatorWindow from "./components/NavigatorWindow/NavigatorWindow";
import { useEffect, useState } from "react";
function App() {
  const [friends, setFriends] = useState([])

  useEffect(() => {
      const fetchFriends = async () => {
          try {
              const response = await fetch('../data/Data.json')
              const jsonData = await response.json()
              setFriends(jsonData.users)
          } catch (error) {
              console.error("OSHBINKA", error)
          }
      }
      fetchFriends();
  },[])

  return (
    <div className="App">
      
      {friends.map(friend => (
                <div key={friend.id}>
                <p>{friend.username} </p>
                <p>{friend.avatar}</p>
                <p>{friend.groups}</p>
                <p>{friend.meetings}</p>
                </div>
            ))}
      <NavigatorWindow/>
    </div>
  );
}

export default App;
