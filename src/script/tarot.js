function chartCalculator() {
  let announce = document.querySelector(".signUp");
  let name = prompt("What's your name?");
  if (name === "") {
    alert("Please fill out this field 🙏");
  } else {
    let birthday = prompt("What's your date of birth?");
    if (birthday === "") {
      alert("Please fill out this field 🙏");
    } else {
      let time = prompt("What time were you born (eg.: 1pm, 2am)");
      if (time === "") {
        alert("Please fill out this field 🙏");
      } else {
        let email = prompt("What's your email address?");
        if (email === "") {
          alert("Please fill out this field 🙏");
        } else {
          announce.innerHTML = `Enjoy reading your Report, ${name}!`;
          alert(
            `Thank you, ${name}! Your birthday chart has been sent to your email 📧`
          );
        }
      }
    }
  }
}
let birthChart = document.querySelector("button");
birthChart.addEventListener("click", chartCalculator);
