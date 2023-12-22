document.getElementById("navbar").innerHTML = `
<header>
  <nav class="navbar navbar-expand-md sticky-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a id="home" class="nav-link" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a id="objectives" class="nav-link" href="./objectives.html">Objectives</a>
          </li>
          <li class="nav-item">
            <a id="team" class="nav-link" href="./team.html">Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

`;

function Activate(id) {
  document.getElementById(id).classList.add("active");
}
