function createNewCustomer(event) {
  event.preventDefault();

  const fname = document.querySelector("#fname").value.trim();
  const lname = document.querySelector("#lname").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phonenum = document.querySelector("#phonenum").value.trim();
  // const areYouAPayingCustomerYes = document
  //   .querySelector("#customer")
  //   .value.trim();
  // const areYouAPayingCustomerNo = document
  //   .querySelector("#prospect")
  //   .value.trim();
}

if (fname && lname && email && phonenum) {
  fetch("/api/customer", {
    method: "post",
    body: JSON.stringify({
      fname,
      lname,
      phonenum
    }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response);
  });
}
