let inputData = document.getElementById("input");
let submitData = document.getElementById("submit");
let imgData = document.getElementById("img");

submitData.addEventListener("click", () => {
  let dataValue = input.value;

  fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${dataValue}`).then(
    (response) => {
      img.setAttribute("src", response.url);
      img.style.display = "block";
    }
  );
});