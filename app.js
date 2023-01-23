// const form = document.getElementById("my-form");
        
//         async function handleSubmit(event) {
//           event.preventDefault();
//           var status = document.getElementById("my-form-status");
//           var data = new FormData(event.target);
//           fetch(event.target.action, {
//             method: form.method,
//             body: data,
//             headers: {
//                 'Accept': 'application/json'
//             }
//           }).then(response => {
//             if (response.ok) {
//               status.innerHTML = "Thanks for your submission!";
//               form.reset()
//             } else {
//               response.json().then(data => {
//                 if (Object.hasOwn(data, 'errors')) {
//                   status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
//                 } else {
//                   status.innerHTML = "Oops! There was a problem submitting your form"
//                 }
//               })
//             }
//           }).catch(error => {
//             status.innerHTML = "Oops! There was a problem submitting your form"
//           });
//         }
//         form.addEventListener("submit", handleSubmit)

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);