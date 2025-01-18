import { Header } from "./components/Header";
import "./index.css";
import { Profile } from "./components/Profile";
import { Form } from "./components/Form";
import { LinkH } from "./components/LinkH";
import { Radio } from "./Radio";
import { Border } from "./Border";
import { FileIn } from "./FileInput";
import { Card } from "./Card";


function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Form />
      <LinkH />
      <Radio />
      <Border />
      <FileIn />
      <Card />
    </div>
  );
}

export default App;
