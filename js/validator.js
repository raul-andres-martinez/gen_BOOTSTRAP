const emailF = document.querySelector("#email");
const contactF = document.querySelector("#contactReason");
const subjectF = document.querySelector("#subject");

const form = document.querySelector("#sendForm");

const checkEmail = () => {
  let valid = false;

  const email = emailF.value.trim();

  if (!isRequired(email)) {
    showError(emailF, "Obrigatório");
  } else if (!isEmailValid(email)) {
    showError(emailF, "Informe um email válido.");
  } else {
    showSuccess(emailF);
    valid = true;
  }
  return valid;
};

const checkSubject = () => {
  let valid = false;

  const min = 1,
    max = 30;

  const subject = subjectF.value.trim();

  if (!isRequired(subject)) {
    showError(subjectF, "Obrigatório.");
  } else if (!isBetween(subject.length, min, max)) {
    showError(subjectF, "Ultaprassa o limite de 30 caractéres.");
  } else {
    showSuccess(subjectF);
    valid = true;
  }
  return valid;
};

const checkContact = () => {
  let valid = false;

  const min = 1,
    max = 500;

  const contact = contactF.value.trim();

  if (!isRequired(contact)) {
    showError(contactF, "Obrigatório.");
  } else if (!isBetween(contact.length, min, max)) {
    showError(contactF, "Ultaprassa o limite de 500 caractéres.");
  } else {
    showSuccess(contactF);
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  //form-field element
  const formField = input.parentElement;

  // remove error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmailValid = checkEmail(),
    isSubjectValid = checkSubject(),
    isContactValid = checkContact();

  let isFormValid = isEmailValid && isSubjectValid && isContactValid;

  if (isFormValid) {
    let statusResponse = (document.getElementById("status").innerHTML =
      "Formulário enviado!");
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "email":
      checkEmail();
      break;
    case "subject":
      checkSubject();
      break;
    case "contact":
      checkContact();
      break;
  }
});
