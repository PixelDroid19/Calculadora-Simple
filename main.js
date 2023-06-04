/**
 * Calculadora con validación de entrada y cálculo de resultados.
 */

// Obtener referencias a los elementos del DOM
const buttonElement = document.querySelector(".key_button");
const inputValueElement = document.getElementById("show");

// Agregar el evento click al elemento del botón
buttonElement.addEventListener("click", handleClick);

// Agregar el evento input al campo de entrada
inputValueElement.addEventListener("input", handleInput);

/**
 * Maneja el evento click en los botones de la calculadora.
 * @param {Object} event - Objeto del evento click.
 */
function handleClick(event) {
  const target = event.target;
  if (target.matches("button")) {
    const action = target.dataset.action;
    const keyValue = target.dataset.value;

    if (!action) {
      // Agregar el valor del botón al campo de entrada
      inputValueElement.value += keyValue;
    } else {
      if (action !== "clear" && action !== "equal") {
        // Agregar el símbolo de la acción al campo de entrada
        inputValueElement.value += action;
      }
    }

    if (action === "equal") {
      // Calcular el resultado
      calculateResult();
    }

    if (action === "clear") {
      // Limpiar el campo de entrada
      clearInput();
    }
  }
}

/**
 * Maneja el evento input en el campo de entrada para validar la entrada numérica.
 */
function handleInput() {
  const value = inputValueElement.value;
  if (!isValidNumber(value)) {
    // Eliminar el último carácter no válido del campo de entrada
    inputValueElement.value = value.slice(0, -1);
  }
}

/**
 * Limpia el campo de entrada.
 */
function clearInput() {
  inputValueElement.value = "";
}

/**
 * Calcula el resultado de la expresión en el campo de entrada.
 */
function calculateResult() {
  try {
    const expression = inputValueElement.value;
    validateExpression(expression);
    const result = evaluateExpression(expression);
    const formattedResult = formatResult(result);
    inputValueElement.value = formattedResult;
  } catch (error) {
    console.error(error);
    showErrorMessage(error.message);
    setTimeout(clearErrorMessage, 900);
  }
}

/**
 * Valida la expresión para asegurarse de que es válida.
 * @param {string} expression - Expresión a validar.
 * @throws {Error} Si la expresión no es válida.
 */
function validateExpression(expression) {
  // Realiza la validación de la expresión para asegurarte de que es válida
  // Puedes lanzar un error personalizado si la expresión no cumple con los requisitos
}

/**
 * Evalúa la expresión y realiza el cálculo.
 * @param {string} expression - Expresión a evaluar.
 * @returns {number} Resultado del cálculo.
 * @throws {Error} Si la expresión no es válida.
 */
function evaluateExpression(expression) {
  const operators = /[+\-*/]/;
  const numbers = expression.split(operators).map(Number);
  const operator = expression.match(operators);

  if (operator && numbers.length >= 2) {
    const [num1, num2] = numbers;
    let result;

    switch (operator[0]) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    return result;
  }

  throw new Error("Invalid expression");
}

/**
 * Formatea el resultado para mostrarlo en el campo de entrada.
 * @param {number} result - Resultado a formatear.
 * @returns {string} Resultado formateado.
 */
function formatResult(result) {
  return Number.isInteger(result) ? result.toString() : result.toFixed(2);
}

/**
 * Muestra un mensaje de error en la interfaz de usuario.
 * @param {string} message - Mensaje de error.
 */
function showErrorMessage(message) {
  // Muestra un mensaje de error en la interfaz de usuario para que el usuario comprenda el problema
}

/**
 * Borra el mensaje de error de la interfaz de usuario después de un cierto tiempo.
 */
function clearErrorMessage() {
  // Borra el mensaje de error de la interfaz de usuario después de un cierto tiempo
}

/**
 * Verifica si un valor es numérico.
 * @param {string} value - Valor a verificar.
 * @returns {boolean} True si es numérico, false si no lo es.
 */
function isValidNumber(value) {
  // Utiliza isNaN() para verificar si el valor es numérico
  // Retorna true si es numérico, false si no lo es
  return !isNaN(value);
}
