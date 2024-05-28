import "./App.css";
import Heading from "./components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Button from "./components/Buttons";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.Privacy);
  return (
    <>
      <Container>
        <Heading></Heading>
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Button></Button>
      </Container>
    </>
  );
}

export default App;
