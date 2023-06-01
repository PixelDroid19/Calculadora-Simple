const Button = document.querySelector(".key_button");
const InputValue = document.getElementById("show");

function referenceButton(ref) {
  const Value = ref.dataset.value;
  const Action = ref.dataset.action;

  if (Value) {
    InputValue.value += Value;
  } else {
    InputValue.value += Action;
  }
}

function Clear() {
  InputValue.value = "";
}

function calcular() {
  try {
    const Resultado = eval(InputValue.value)
    InputValue.value = Resultado.toFixed(2);
  } catch (err) {
    console.log(err)
    InputValue.value = "Error";
    setTimeout(() => {
      Clear();
    }, 900);
  }
}

/* Button.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    //const value = key.dataset.value;

    const action = key.dataset.action;
    const keyValue = key.dataset.value;

    const screenNumber = InputValue.textContent;

      if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      
    }

    if (!action) {
      if (screenNumber === "0") {
        keyValue.value = keyValue;
      } else {
        keyValue.value = screenNumber + keyContent;
      }
    }
  }
}); */

//InputValue.value += value;
