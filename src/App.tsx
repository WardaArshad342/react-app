import ListGroup from "./components/ListGroup";
import Login from "./components/LoginSignUp/Login";
import "./App.css";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  let items = ["Customers", "Products"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {loggedInUser === "" ? (
        <Login />
      ) : (
        <div>
          <ListGroup
            items={items}
            heading="My App"
            onSelectItem={handleSelectItem}
          />
        </div>
      )}
    </div>
  );
}

export default App;
