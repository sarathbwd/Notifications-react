const Notification = (props) => {
  //  Write your code here.
  const { message, imageUrl, className } = props;
  const itemName = `item ${className}`;
  return (
    <div className={itemName}>
      <img src={imageUrl} className="image" />
      <p className="content">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="message-container">
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
        className="item1"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
        className="item2"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
        className="item3"
      />
      <Notification
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
        className="item4"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
