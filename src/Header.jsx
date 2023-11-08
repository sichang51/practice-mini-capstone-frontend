export function Header() {
  return (
    <div className="headerlogo">
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/defuv0d-f74c95ca-9400-4064-842c-5f341234ddf9.png/v1/fill/w_800,h_463/star_movies__2021__logo_by_unitedworldmedia_defuv0d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDYzIiwicGF0aCI6IlwvZlwvNGIxY2VlZTUtOTQ1OC00NDM0LTgwYmMtZmM1ZDgzYTJlYTg4XC9kZWZ1djBkLWY3NGM5NWNhLTk0MDAtNDA2NC04NDJjLTVmMzQxMjM0ZGRmOS5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.x32_PygsVq3w5sLfWVbli7qL9-36Qa1nIa_QtQDzaG4"
        height={100}
        width={150}
        alt=""
      />
      <br></br>
      <br></br>
      <div className="headerbar">
        <a href="#home">
          <button className="header-home-button">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/10542/10542477.png"}
              alt=""
              width={50}
              height={50}
              onClick={() => <onClick function></onClick>}
            />
          </button>
        </a>{" "}
        <a href="#all-movies">
          <button className="all-movies-button">All Movies</button>
        </a>
        <br></br>
        <br></br>
        <form>
          <label>
            <input className="header-searchbar" type="text" placeholder="Search Here..." />
          </label>
        </form>
      </div>
    </div>
  );
}
