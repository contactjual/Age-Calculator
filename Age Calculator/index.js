// Set current date automatically when page loads
window.onload = function () {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  document.getElementById("currentDate").value = `${yyyy}-${mm}-${dd}`;
};

function calculateAge() {
  const birthDate = new Date(document.getElementById("birthDate").value);
  const currentDate = new Date(document.getElementById("currentDate").value);

  if (!birthDate || !currentDate || birthDate > currentDate) {
    document.getElementById("result").innerHTML = "<p style='color:red;'>Please select valid dates.</p>";
    return;
  }

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Total days difference
  const totalDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));

  document.getElementById("result").innerHTML = `
    <p><span class="highlight">Birth Date:</span> ${birthDate.toLocaleDateString()}</p>
    <p><span class="highlight">Current Date:</span> ${currentDate.toLocaleDateString()}</p>
    <p><span class="highlight">Age:</span> ${years} years, ${months} months, ${days} days</p>
    <p><span class="highlight">Total Days:</span> ${totalDays}</p>
  `;
}
