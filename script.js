const $input = document.getElementById("input"),
  $buttons = document.querySelectorAll("button");
$buttons.forEach((button) => {
  if (button.id === "delete") {
    button.addEventListener("click", () => {
      $input.textContent = "";
    });
  } else if (button.id === "delete_last") {
    button.addEventListener("click", () => {
      let operation = $input.textContent;
      $input.textContent = operation.substring(0, operation.length - 1);
    });
  } else if (button.id === "btn_result" && $input.textContent !== 0) {
    button.addEventListener("click", () => {
      let result = eval($input.textContent);
      $input.textContent = result;
    });
  } else {
    button.addEventListener("click", () => {
      $input.textContent += button.id;
    });
  }
});
const $circle = document.querySelector(".circle"),
  $container = document.querySelector(".container");

$circle.addEventListener("click", () => {
  $container.classList.toggle("darck");
});
