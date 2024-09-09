/* *************************************************************
 *  Name of the challenge  : CRUD                             *
 *  Developed for          :                                  *
 *               Maintenance History                          *
 *  Developer              :                                  *
 *  Creation date           :               Ticket No:        *
 ************************************************************* */

//Variables declaration
let imageInput = document.getElementById("uploadButton");
let imageError = document.getElementById("imgError");
let dobInput = document.getElementById("dob");
let countrySelect = document.getElementById("country");
let organizationSelect = document.getElementById("organization");
let lastNameInput = document.getElementById("enterLast");
let mobileNoInput = document.getElementById("enterMobile");
let stateSelect = document.getElementById("state");
let firstNameInput = document.getElementById("firstName");
let maleCheckBox = document.getElementById("male");
let femaleCheckBox = document.getElementById("female");
let genderValueError = document.getElementById("genderError");
let emailInput = document.getElementById("email");
let cityInput = document.getElementById("city");
let communicationAddressId = document.getElementById("commAddress");
let permanentAddressId = document.getElementById("perAddress");
let pincodeInput = document.getElementById("pinNumber");
let isSameAdress = document.getElementById("checkedBox");
let imageOutput = document.getElementById("photoId");
let registerButton = document.getElementById("regBtn");
let updateButton = document.getElementById("update");
let resetButton = document.getElementById("resetBtn");
let form = document.querySelector("form");
let getAllInputs = document.querySelectorAll("input");
let getAllSpan = document.querySelectorAll("span");
let getAllSelect = document.querySelectorAll("select");
let getAllTextarea = document.querySelectorAll("textarea");

let isInputsFilled = false;
let lastNamePattern = /^[a-zA-Z]+[\sa-zA-Z]*$/;
let mobileNoPattern = /^[6-9][0-9]{9}$/;
let firstNamePattern = /^[a-zA-Z]+[\sa-zA-Z]+$/;
let emailPattern = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9-]+\.[a-zA-z0-9]{2,16}$/;
let cityPattern = /^[a-zA-Z]+[\sa-zA-Z]*$/;
let pincodePattern = /^[1-9][0-9]{5}$/;
let allErrorOutputs = [],
  allInputFields = [];
let gender = false;

//Get all input fields and push into an array
getAllInputs.forEach((element) => {
  //prettier-ignore
  if ( ![ "regBtn", "update", "resetBtn", "successCode", "uploadButton", "male", "female", "checkedBox",].includes(element.id)) {
    allInputFields.push(element);
  }
});
getAllSelect.forEach((element) => {
  allInputFields.push(element);
});
getAllTextarea.forEach((element) => {
  allInputFields.push(element);
});

//Remove error message if user started typing
const clearErrors = (input) => {
  input.nextElementSibling.nextElementSibling.innerHTML = "";
};

//Disable update button
updateButton.style.display = "none";

//Accept only image type in file selector
imageInput.setAttribute("accept", "image/*");
//Get image and display it
imageInput.onchange = (event) => {
  let file = event.target.files[0];
  const reader = new FileReader();
  if (!file.type.match("image.*")) {
    alert("Only image files are allowed");
    return;
  }
  reader.readAsDataURL(file);
  reader.onload = function () {
    imageOutput.src = reader.result;
  };
};

//Set minimum and maximum range for date input
const dateRange = () => {
  let today = new Date();
  dobInput.setAttribute(
    "min",
    `${today.getFullYear() - 100}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
  );
  dobInput.setAttribute(
    "max",
    `${today.getFullYear() - 18}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`
  );
};
dateRange();

//Function to fill select dropdown values in country and state
const dropdownFunc = (data, select) => {
  while (select.firstChild) select.removeChild(select.lastChild);
  let option = document.createElement("option");
  option.textContent = "Select";
  select.appendChild(option);
  if (data.length) {
    data.forEach((element) => {
      option = document.createElement("option");
      option.textContent = element.name;
      select.appendChild(option);
    });
  } else {
    let option = document.createElement("option");
    option.textContent = "No state avilable for this country";
    select.appendChild(option);
  }
};
dropdownFunc(dropdownData, countrySelect);

//Function call to fill states dropdown
countrySelect.addEventListener("change", (event) => {
  dropdownData.forEach((element) => {
    if (element.name == countrySelect.value)
      dropdownFunc(element.states, stateSelect);
  });
});

//Organization select
organizationSelect.addEventListener("change", (event) => {});

//Communication and permanent address to be same
isSameAdress.addEventListener("change", () => {
  if (isSameAdress.checked) {
    permanentAddressId.value = communicationAddressId.value;
    permanentAddressId.disabled = true;
    allInputFields[11].nextElementSibling.nextElementSibling.innerHTML = "";
  } else if (!isSameAdress.checked) permanentAddressId.disabled = false;
});
communicationAddressId.addEventListener("input", () => {
  if (isSameAdress.checked)
    permanentAddressId.value = communicationAddressId.value;
});

console.log(allInputFields);

const validationFunc = () => {
  //Clear all error messages
  allInputFields.forEach((element) => {
    element.nextElementSibling.nextElementSibling.innerHTML = "";
  });
  isInputsFilled = true;

  if (!maleCheckBox.checked && !femaleCheckBox.checked)
    genderValueError.innerHTML = "Please fill this field";
  else genderValueError.innerHTML = "";

  //element "" for dob, element "Select" for dropdown, element.value for input fields
  allInputFields.forEach((element, index) => {
    if (
      element.value == "" ||
      element.value == "Select" ||
      imageOutput.src == ""
    )
      isInputsFilled = false;

    if (element.value != "" && element.value != "Select") {
      allInputFields[index].nextElementSibling.nextElementSibling.innerHTML =
        "";
      if (imageOutput.src != "") imageError.innerHTML = "";
    } else
      allInputFields[index].nextElementSibling.nextElementSibling.innerHTML =
        "Please fill this field";
  });
  //Regex pattern
  if (lastNameInput.value != "" && !lastNamePattern.test(lastNameInput.value))
    allInputFields[1].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid name";
  if (mobileNoInput.value != "" && !mobileNoPattern.test(mobileNoInput.value))
    allInputFields[2].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid mobile number";
  if (
    firstNameInput.value != "" &&
    !firstNamePattern.test(firstNameInput.value)
  )
    allInputFields[3].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid fist name";
  if (emailInput.value != "" && !emailPattern.test(emailInput.value))
    allInputFields[4].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid email id";
  if (cityInput.value != "" && !cityPattern.test(cityInput.value))
    allInputFields[5].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid city name";
  if (pincodeInput.value != "" && !pincodePattern.test(pincodeInput.value))
    allInputFields[6].nextElementSibling.nextElementSibling.innerHTML =
      "Enter valid pincode";
  return isInputsFilled;
};

//Register button function to add new info to localStorage
const validateForm = () => {
  if (maleCheckBox.checked) gender = maleCheckBox.value;
  else if (femaleCheckBox.checked) gender = femaleCheckBox.value;
  validationFunc();
};
//To prevent form getting submitted when validation fails
form.addEventListener("submit", (event) => {
  if (isInputsFilled) {
    if (localStorage.getItem("personInfo") == null) personInfoArray = [];
    else personInfoArray = JSON.parse(localStorage.getItem("personInfo"));

    let existingPersonIndex = personInfoArray.findIndex(
      (person) =>
        person.firstName === firstNameInput.value &&
        person.lastName === lastNameInput.value
    );
    let personInfoObj = {
      dob: dobInput.value,
      lastName: lastNameInput.value,
      mobileNo: mobileNoInput.value,
      firstName: firstNameInput.value,
      email: emailInput.value,
      city: cityInput.value,
      pincode: pincodeInput.value,
      country: countrySelect.value,
      organization: organizationSelect.value,
      state: stateSelect.value,
      communicationAddress: communicationAddressId.value,
      permanentAddress: permanentAddressId.value,
      personImg: imageOutput.src,
      gender: gender,
    };
    if (existingPersonIndex !== -1)
      personInfoArray[existingPersonIndex] = personInfoObj;
    else personInfoArray.push(personInfoObj);

    localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
  } else {
    event.preventDefault();
    validationFunc();
  }
});

//Display table
let crudTableId = document.getElementById("crudTable");
const showPersonInfo = () => {
  if (localStorage.getItem("personInfo") == "[]") {
    personInfoArray = [];
    while (crudTableId.lastChild)
      crudTableId.removeChild(crudTableId.lastChild);
  } else {
    personInfoArray = JSON.parse(localStorage.getItem("personInfo"));

    let table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.margin = "auto";
    while (crudTableId.lastChild)
      crudTableId.removeChild(crudTableId.lastChild);

    //prettier-ignore
    let headers = ["Image", "Name", "Organization", "Moblie number", "Country", "Email", "City", "Communication address", "Actions"];
    let head = document.createElement("thead");
    let tr = document.createElement("tr");
    headers.forEach((element) => {
      let th = document.createElement("th");
      th.textContent = element;
      tr.appendChild(th);
    });
    head.appendChild(tr);
    table.appendChild(head);
    let tbody = document.createElement("tbody");

    personInfoArray.forEach((element, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
      <td> <img src="${element.personImg}" height=100px width=100px/> </td>
      <td> ${element.firstName} ${element.lastName} </td>
      <td> ${element.organization} </td>
      <td> ${element.mobileNo} </td>
      <td> ${element.country} </td>
      <td> ${element.email} </td>
      <td> ${element.city} </td>
      <td> ${element.communicationAddress} </td>
      <td> <i class="fa-solid fa-pen-to-square" style="cursor: pointer;" onclick="editFunc(${index})"></i> <br> <br>
           <i class="fa-solid fa-trash" style="color: #ff0000; cursor: pointer" onclick="deleteFunc(${index})"></i> </td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    crudTableId.appendChild(table);
  }
};
document.onload = showPersonInfo();

//Edit function if user clicked the edit button
const editFunc = (index) => {
  document
    .querySelectorAll(".fa-trash, .fa-pen-to-square")
    .forEach((element) => element.removeAttribute("onclick"));

  registerButton.style.display = "none";
  updateButton.style.display = "block";

  let personInfoArray = JSON.parse(localStorage.getItem("personInfo"));
  const personInfoValue = Object.values(personInfoArray[index]);
  imageOutput.src = personInfoValue[12];
  allInputFields.forEach((element, loopIndex) => {
    if (loopIndex != 9) element.value = personInfoValue[loopIndex];
    if (loopIndex == 9) {
      dropdownData.forEach((element) => {
        if (element.name == personInfoValue[7]) {
          dropdownFunc(element.states, stateSelect);
          stateSelect.value = personInfoValue[9];
        }
      });
    }
  });
  personInfoValue[13] == "Male"
    ? (maleCheckBox.checked = true)
    : (femaleCheckBox.checked = true);
  //Update function if user clicks update button
  updateButton.addEventListener("click", (event) => {
    if (validationFunc()) {
      personInfoValue.forEach((element, index) => {
        element = allInputFields[index].value;
      });
      if (maleCheckBox.checked) gender = maleCheckBox.value;
      else if (femaleCheckBox.checked) gender = femaleCheckBox.value;
      personInfoArray[0].personImg = imageOutput.src;

      localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
      showPersonInfo();
    } else {
      event.preventDefault();
    }
  });
  //Reset function
  resetButton.addEventListener("click", (event) => {
    const personInfoValue = Object.values(personInfoArray[index]);
    imageOutput.src = personInfoValue[12];
    allInputFields.forEach((element, loopIndex) => {
      if (loopIndex != 9) element.value = personInfoValue[loopIndex];
      if (loopIndex == 9) {
        dropdownData.forEach((element) => {
          if (element.name == personInfoValue[7]) {
            dropdownFunc(element.states, stateSelect);
            stateSelect.value = personInfoValue[9];
          }
        });
      }
    });
    personInfoValue[13] == "Male"
      ? (maleCheckBox.checked = true)
      : (femaleCheckBox.checked = true);
    event.preventDefault();
  });
};

const updateForm = (element) => {};
const clearFields = () => {
  allInputFields.forEach((element) => {
    element.nextElementSibling.nextElementSibling.innerHTML = "";
  });
  imageOutput.removeAttribute("src");
};
const deleteFunc = (index) => {
  let personInfoArray = JSON.parse(localStorage.getItem("personInfo"));
  personInfoArray.splice(index, 1);
  localStorage.setItem("personInfo", JSON.stringify(personInfoArray));
  showPersonInfo();
};

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});
