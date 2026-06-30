let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let inp = parseFloat(input.value);

  if (inp > 90 && inp <= 100) {
    result.textContent = "اے پلس گریڈ";
  } else if (inp > 80 && inp < 100) {
    result.textContent = "اے گریڈ";
  } else if (inp > 70 && inp < 100) {
    result.textContent = "بی گریڈ";
  } else if (inp > 60 && inp < 100) {
    result.textContent = "سی گریڈ";
  } else if (inp > 50 && inp < 100) {
    result.textContent = "ڈی گریڈ";
  } else if (inp > 100 || inp <= 0) {
    result.textContent =
      "آپ نے غلط نمبر درج کیا ہے برائے مہربانی ایک سے سو تک نمبر درج کریں ";
  } else {
    result.textContent = "ناکام";
  }
});
