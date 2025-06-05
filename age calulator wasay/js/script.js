document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const dobValue = document.getElementById('dob').value;
  const result = document.getElementById('result');
  if (!dobValue) {
    result.textContent = 'Please enter your date of birth.';
    return;
  }
  const dob = new Date(dobValue);
  const today = new Date();
  if (dob > today) {
    result.textContent = 'The date of birth cannot be in the future.';
    return;
  }
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();
  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
});