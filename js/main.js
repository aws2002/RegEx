const inputs = document.querySelectorAll("input");
// regex patterns
const patterns = {
  name: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //             yourname @ domain   .  com          ( .ps )
  password: /^[\d\w@-]{8,20}$/i,
  telephone: /^\+(972|970)\-\d{2}\-\d{3}\-\d{4}$/,
  slug: /^[a-z\d-]{8,20}$/,
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
