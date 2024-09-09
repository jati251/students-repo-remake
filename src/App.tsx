import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import { ColorPicker } from "primereact/colorpicker";
import { ListBox } from "primereact/listbox";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Editor } from "primereact/editor";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState<string>();
  const [selectedCity, setSelectedCity] = useState<string>();
  const [text, setText] = useState("");
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + PrimeReact</h1>
      <div>
        <h2>PrimeReact Typescript Issue Template</h2>
        <p>
          Please create a test case and attach the link to the to your github
          issue report.
        </p>
      </div>
      <div className="card">
        <Button
          icon="pi pi-plus"
          className="mr-2"
          label="Increment"
          onClick={() => setCount((count) => count + 1)}
        ></Button>
        <InputText value={`${count}`} />
        <p>
          Edit <code>src/App.tsx</code> and save to test PrimeReact
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ColorPicker
        value={color}
        onChange={(val) => {
          setColor(val.target.value as string);
          console.log(val);
        }}
      />

      <ListBox
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value as string)}
        options={cities}
        optionLabel="name"
        className="w-full md:w-14rem"
      />

      <Editor
        value={text}
        onTextChange={(e) => {
          setText(e.htmlValue as string);
          console.log(typeof e.htmlValue);
        }}
        style={{ height: "320px" }}
      />
      
      <div dangerouslySetInnerHTML={{ __html: text }} />

      <Accordion activeIndex={0}>
        <AccordionTab header="Header I">
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab header="Header II">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab header="Header III">
          <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default App;
