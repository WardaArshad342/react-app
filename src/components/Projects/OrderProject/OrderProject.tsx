import { useState } from "react";
import Login from "./Login";
import LeftMenu from "./LeftMenu";
import Customers from "./Customers";
import Product from "./Product";
import "./OrderProject.css";

const OrderProject = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const [selectedItem, setSelectedItem] = useState("Customers");

  const handleLogin = (email: string) => {
    setLoggedInUser(email);
  };

  let items = ["Customers", "Products"];
  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      {loggedInUser === "" ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="page-container">
          {/* <h2>Welcome {loggedInUser}</h2> */}
          <div className="main-layout">
            <div className="side-menu">
              <LeftMenu
                items={items}
                heading="My App"
                onSelectItem={handleSelectItem}
              />
            </div>
            <div className="content">
              {selectedItem === "Customers" ? <Customers /> : <Product />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderProject;
