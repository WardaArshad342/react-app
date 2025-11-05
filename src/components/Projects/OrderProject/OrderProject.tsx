import { useState } from "react";
import Login from "./Login";
import ListGroup from "./ListGroup";

const OrderProject = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const handleLogin = (email: string) => {
    setLoggedInUser(email);
  };

  let items = ["Customers", "Products"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {loggedInUser === "" ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome {loggedInUser}</h2>
          <ListGroup
            items={items}
            heading="My App"
            onSelectItem={handleSelectItem}
          />
        </div>
      )}
    </div>
  );
};

export default OrderProject;
