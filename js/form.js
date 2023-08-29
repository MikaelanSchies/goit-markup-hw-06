const formEI = document.querySelector(".modal-form");

formEI.addEventListener("submit", (event) => {
  event.preventDefault();

  const { user_name, user_phone, user_email, user_comment } =
    event.currentTarget.elements;
});
