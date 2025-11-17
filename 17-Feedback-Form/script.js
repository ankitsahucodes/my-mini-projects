const feedbackForm = document.getElementById("feedbackForm");
//console.log(feedbackForm);

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("nameInput").value;
  const feedbackTextarea = document.getElementById("feedbackTextarea").value;
  const service = document.querySelector('input[name="service"]:checked').value;
  const interest = document.querySelectorAll('input[name="interest"]:checked');

  let selectedInterests = [];
  for (let i = 0; i < interest.length; i++) {
    selectedInterests.push(interest[i].value);
  }
  const overallExpSelect = document.getElementById("overallExpSelect").value;

  //console.log(nameInput, feedbackTextarea);

  //console.log(nameInput,feedbackTextarea,service,interest,overallExpSelect);

  const feedbackInputValues = `
        <h2>Feedback Submitted:</h2
        <p><strong>Name: </strong>${nameInput}</p>
        <p><strong>Feedback: </strong>${feedbackTextarea}</p>
        <p><strong>Service Rating: </strong>${service}</p>
        <p><strong>Topics of Interest: </strong>${selectedInterests.join(
          ", "
        )}</p>
        <p><strong>Overall Experience: </strong>${overallExpSelect}</p>`;

  const divElement = document.getElementById("formResult");
  divElement.innerHTML = feedbackInputValues;
});
