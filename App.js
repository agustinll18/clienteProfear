import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/footer/Footer";
import Login from "./paginas/Login";
import "./styles/css/styles.css";
import Bienvenida from "./components/Bienvenida";
import PostPage from "./paginas/PostPage";
import ScrollToTop from "./FixScroll";
import Foro from "./paginas/Foro";
import SignUp from "./paginas/SignUp";
import Post from "./paginas/Post";
import Campeones from "./paginas/Campeones";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <div className="app">
      {/* 
      <div className="containerTotal"> */}
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Navbar1 />
                <Bienvenida />
                <Footer />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="/post">
                <Post />
              </Route>
              <Route path="/foro/:id">
                <Navbar1 />
                <div className="contenedorPerfil">
                  <PostPage />
                </div>

                <Footer />
              </Route>
              <Route path="/foro">
                <Navbar1 />
                <Foro />
                <Footer />
              </Route>
              <Route path="/campeones">
                <div className="separador"></div>
                <Navbar1 />
                <div className="saludoCampeones">
                  <h2 className="col-9">
                    Nuestros CAMPEONES DEL MUNDO <br />
                    <strong className="stars">★★★</strong>
                  </h2>
                </div>
                <Campeones />
                <div className="separador"></div>
                <Footer />
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </AuthProvider>
      {/* 
      </div> */}
    </div>
  );
}

export default App;