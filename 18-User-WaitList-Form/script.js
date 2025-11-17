const userWaitlistForm = document.getElementById("userWaitlistForm");

userWaitlistForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullNameInput").value;
  const phoneNum = document.getElementById("phoneNum").value;
  const emailId = document.getElementById("emailId").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const areYouGraduate = document.querySelector(
    'input[name="areYouGraduate"]:checked'
  ).value;
  const workingSelect = document.getElementById("workingSelect").value;
  const whyWebDev = document.getElementById("tellHere").value;
  const knowAboutUsSources = document.querySelectorAll(
    'input[name="knowAboutUsSources"]:checked'
  );

  const selectedKnowAboutUs = [];
  for (let i = 0; i < knowAboutUsSources.length; i++) {
    selectedKnowAboutUs.push(knowAboutUsSources[i].value);
  }

  // console.log(
  //   fullName,
  //   phoneNum,
  //   emailId,
  //   gender,
  //   areYouGraduate,
  //   workingSelect,
  //   whyWebDev,
  //   selectedKnowAboutUs
  // );

  const userInputValues = `
  <h2>Details Submitted:</h2>
  <p><strong>Name: </strong>${fullName}</p>
  <p><strong>Phone Number: </strong>${phoneNum}</p>
  <p><strong>Email ID: </strong>${emailId}</p>
  <p><strong>Gender: </strong>${gender}</p>
  <p><strong>Are you a college graduate?: </strong>${areYouGraduate}</p>
  <p><strong>Are you working anywhere full-time or part-time?: </strong>${workingSelect}</p>
  <p><strong>Why do you want to learn web development?: </strong>${whyWebDev}</p>
  <p><strong>How did you come to know about us?: </strong>${selectedKnowAboutUs.join(
    ", "
  )}</p>`;

  const divElement = document.getElementById("formDetails");
  divElement.innerHTML = userInputValues;
});
