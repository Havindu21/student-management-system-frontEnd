const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const nic = document.getElementById("nic");
const emailAddress = document.getElementById("emailAddress");
const contactNo = document.getElementById("contactNo");
const city = document.getElementById("city");
const birthday = document.getElementById("birthday");
const gender = document.getElementsByName("gender");
const image = document.getElementById("img");
const exception1 = document.getElementById("exception1");
const exception2= document.getElementById("exception2");
const exception3 = document.getElementById("exception3");
const exception4 = document.getElementById("exception4");
const exception5 = document.getElementById("exception5");
const exception6 = document.getElementById("exception6");

const btnReg = document.getElementById("btn-SignUp");

const courseCombo = document.querySelector("#course");

let combo;

courseCombo.addEventListener("change", () => {
  combo = courseCombo.value;
});

btnReg.addEventListener("click", () => {
  let selectedGender;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
    }
  }
  const formData = new FormData();

  formData.append("firstName", firstName.value);
  formData.append("lastName", lastName.value);
  formData.append("nic", nic.value);
  formData.append("emailAddress", emailAddress.value);
  formData.append("contactNo", contactNo.value);
  formData.append("city", city.value);
  formData.append("birthday", birthday.value);
  formData.append("course", combo);
  formData.append("gender", selectedGender);
  formData.append("file", image.files[0]);

  fetch("http://localhost:8080/student", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      exception1.innerHTML = data.firstName == "empty" ?  "Required Field" : "&#x1F44D;";
      exception2.innerHTML = data.lastName == "empty" ?  "Required Field" : "&#x1F44D;";
      exception3.innerHTML = data.nic == "Incorrect" ?  "incorrect, please input correct nic" : "&#x1F44D;";
      if(data.emailAddress=="Invalid"){
        exception4.innerHTML = "invalid, please input correct email";
      }else if(data.emailAddress=="empty"){
        exception4.innerHTML = "Required field";
    }else{
        exception4.innerHTML = "&#x1F44D;";
    }
      exception5.innerHTML = data.contactNo == "Incorrect" ?  "incorrect, please input correct contact number" : "&#x1F44D;";
      exception6.innerHTML = data.city == "empty" ?  "Required Field" : "&#x1F44D;";
      console.log(data.emailAddress);
    });
});

fetch("navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });
