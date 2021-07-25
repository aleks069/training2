import { BrowserRouter, NavLink, Route } from "react-router-dom";

const Profile = () => {
  return (
    <h1>Это страница с профилем</h1>);
};
const Messages = () => {
  return (
    <h1>Это страница с сообщениями</h1>);
};
const Settings = () => {
  return (
    <h1>Это страница с установками</h1>);
};
const Friends = () => {
  return (
    <h1>Это страница с друзьями</h1>);
};

const Menu = () => {
  return (
    <div className="nav flex-column nav-pills" aria-orientation="vertical">
      <NavLink className="nav-link" to="profile">Профиль</NavLink>
      <NavLink className="nav-link" to="messages">Сообщения</NavLink>
      <NavLink className="nav-link" to="settings">настройки</NavLink>
      <NavLink className="nav-link" to="friends">Мои друзья</NavLink>
    </div>)
}

function App() {
  return (
    <div className="container-fluid mt-3">
      <BrowserRouter>
        <div className="row">
          <div className="col-sm-3">
            <Menu />
          </div>
          <div className="col-sm-9">
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Messages} />
            <Route path="/settings" component={Settings} />
            <Route path="/friends" component={Friends} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
