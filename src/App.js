import React from "react";
import Nav from "./components/Nav/Nav"
import Form from "./components/Content/Form"
import "./App.css"
import Footer from "./components/Foter/Footer";
import Body from "./components/Content/Body";
import Body2 from "./components/Content/Body2";
import Privacy from "./components/Foter/Privacy"
import{
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom"


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Body />
          <Body2 />
          <Form />
          <Routes>
            <Route path='/' element={<Footer />}/>
            <Route path='Privacy' element={<Privacy/>}/>
          </Routes>
        </div>
      </Router>
     
    )
  }
}
 

export default App;
