import { left, right } from "@popperjs/core";
import "../style/index.css";

const selectElement = document.getElementById("socialMediaPosition");

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  variables.name === null ? (variables.name = "Name") : null;
  variables.lastName === null ? (variables.lastName = "Last") : null;
  variables.role === null ? (variables.role = "role") : null;
  variables.city === null ? (variables.city = "city") : null;
  variables.country === null ? (variables.country = "country") : null;

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastName}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city} & ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${variables.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "left", // Establecer un valor predeterminado
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;

      if (attribute === "socialMediaPosition") {
        window.variables.socialMediaPosition = this.value;
      }

      render(Object.assign(window.variables, values));
    });
  });
};
