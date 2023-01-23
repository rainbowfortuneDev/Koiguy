import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "pages/Landing";
import Mint from "pages/Mint";
// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
require('dotenv').config()

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/mint" component={Mint} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
export default App;
