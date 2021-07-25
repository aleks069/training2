import { BrowserRouter, Route } from "react-router-dom";

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

function App() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm-3">
          <div className="nav flex-column nav-pills" aria-orientation="vertical">
            <a className="nav-link" href="profile">Профиль</a>
            <a className="nav-link" href="messages">Сообщения</a>
            <a className="nav-link" href="settings">настройки</a>
            <a className="nav-link" href="friends">Мои друзья</a>
          </div>
        </div>
        <div className="col-sm-9">
          <BrowserRouter>
            <Route path="/profile" component={Profile} />
            <Route path="/messages" component={Messages} />
            <Route path="/settings" component={Settings} />
            <Route path="/friends" component={Friends} />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
