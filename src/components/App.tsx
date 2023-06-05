import Route from "./Route";
import AccordionPage from "../pages/AccordionPage";
import DropDownPage from "../pages/DropDownPage";
import ButtonPage from "../pages/ButtonPage";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";
import SideBar from "./SideBar";
import CounterPage from "../pages/CounterPage";
const App = () => {
  return (
    <div>
      <div className="">
        <SideBar />
      </div>

      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          {" "}
          <DropDownPage />
        </Route>
        <Route path="/button">
          {" "}
          <ButtonPage />
        </Route>

        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
};

export default App;
