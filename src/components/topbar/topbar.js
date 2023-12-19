import "./topbar.scss";

function topbar() {
  return (
    <header className="App">
      <img
        className="headerbar__logo--phonescreen"
        src="luke-nodarshvili-brainflix\src\assets\logo\BrainFlix-logo.svg"
        alt="Logo"
      />
      <form>
        <input type="text" id="searchBar" placeholder="Search"></input>
      </form>
    </header>
  );
}

export default topbar;
