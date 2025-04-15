function votingEligibilityChecker() {
  const age = getUserAge();

  if (age === null) return;

  const message = getEligibilityMessage(age);
  showMessage(message);
}

function getUserAge() {
  const input = prompt("Enter your age:");
  const age = parseInt(input, 10);

  if (isNaN(age)) {
    alert("Please enter a valid number for age.");
    return null;
  }

  return age;
}

function getEligibilityMessage(age) {
  return age >= 18
    ? "You are eligible to vote."
    : "You are not eligible to vote yet.";
}

function showMessage(message) {
  alert(message);
}
