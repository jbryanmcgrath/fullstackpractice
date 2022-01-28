async function createCustomer(event) {
  event.preventDefault();

  const fname = document.querySelector("#fname").value.trim();
  const lname = document.querySelector("#lname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phonenum = document.querySelector("#phonenum").value.trim();
  const areYouAPayingCustomerYes = document
    .querySelector("#customer")
    .value.trim();
  const areYouAPayingCustomerNo = document
    .querySelector("#prospect")
    .value.trim();
}

if (fname && lname && email && phonenum && areYouAPayingCustomerYes || areYouAPayingCustomerNo) {
  const response = await fetch("controller/api/customer-routes.js", {
    method: "post",
    body: JSON.stringify({
      fname,
      lname,
      email,
      phonenum,
      areYouAPayingCustomerYes, areYouAPayingCustomerNo
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log('response');
  } else {
    alert(response.statusText);
  }
}
}




document
  .querySelector(".new-customer-form")
  .addEventListener("submit", createCustomer);























// function createNewCustomer(event) {
//   event.preventDefault();

//   const fname = document.querySelector("#fname").value.trim();
//   const lname = document.querySelector("#lname").value.trim();
//   const email = document.querySelector("#email").value.trim();
//   const phonenum = document.querySelector("#phonenum").value.trim();
//   const areYouAPayingCustomerYes = document
//     .querySelector("#customer")
//     .value.trim();
//   const areYouAPayingCustomerNo = document
//     .querySelector("#prospect")
//     .value.trim();
// }

// if (fname && lname && email && phonenum) {
//   fetch("/api/customer-routes", {
//     method: "post",
//     body: JSON.stringify({
//       fname,
//       lname,
//       phonenum
//     }),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     console.log(response);
//   });
// }
