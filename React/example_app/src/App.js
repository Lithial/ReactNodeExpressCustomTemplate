import ButtonAppBar from "./components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./views/Home";

function App() {
    //Add new routes here like the example provided,
    //Swapping route for protected route will allow people to be logged in
    //To view the page
  return (
    <>
      <ButtonAppBar/>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </>
  );
}

export default App;
