import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import { Card, CardTitle, CardText } from "reactstrap";

function App() {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardTitle>
          <Name />
        </CardTitle>
        <Image />
        <CardText>
          <Description />
        </CardText>
        <Price />
      </Card>
    </div>
  );
}

export default App;
