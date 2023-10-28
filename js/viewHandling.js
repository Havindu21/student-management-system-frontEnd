const studentTable = document.getElementById("tbl-viewStudents");

function viewStudent() {
  fetch("http://localhost:8080/student")
    .then((response) => response.json())
    .then((res) => {
      let tblBody = `
    <tr>
    <th>picture</th>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>NIC</th>
    <th>Email Address</th>
    <th>Contact Number</th>
    <th>City</th>
    <th>Birthday</th>
    <th>Course</th>
    <th>Gender</th>
</tr>`;

      res.forEach((element) => {
        console.log(element.imageName);
        tblBody += `<tr>
    <td><img class="image" src="../images/${element.imageName}" alt=""></td>
    <td><button>${element.id}</button></td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.nic}</td>
    <td>${element.emailAddress}</td>
    <td>${element.contactNo}</td>
    <td>${element.city}</td>
    <td>${element.birthday}</td>
    <td>${element.course}</td>
    <td>${element.gender}</td>
</tr> `;
      });
      studentTable.innerHTML = tblBody;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  studentTable.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      buttonValue = e.target.textContent;
      fetch(`http://localhost:8080/student/${buttonValue}`)
        .then((response) => response.json())
        .then((res) => {
          path = res.imagePath;
          name1 = res.imageName;
          let tblBody = "";

          console.log(res.firstName);
          tblBody += `
                
                <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
    <img src="images/${res.imageName}" class="img-fluid rounded-start" alt="..." id="image-card">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${res.firstName} ${res.lastName}</h5>  
        <p class="card-text">${res.firstName} lives in ${res.city}</p>
        <p class="card-text">${res.firstName}'s birthday is ${res.birthday}</p>
      </div>
    </div>
  </div>
</div>         
                `;
        studentTable.innerHTML = tblBody;

        });
    }
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
