const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector(".output");

function sumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sum = sumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sum === 180) {
    outputEl.innerText = "Yay, the angles form a triangle!";
  } else {
    outputEl.innerText = "Nope! This doesn't feel like a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
