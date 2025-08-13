export const HeaderComponents = () => {
  return (
    <>
      <header class="header-menu">
        <div>
          <figure>
            <img
              id="logo"
              src="assets/img/logo.jpeg"
              alt="Logo Taste Tingeries"
            />
          </figure>
        </div>

        <nav class="navbar">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#lingeries">
                Lingeries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SexShop
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
