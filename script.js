
// Function to get the current year from the internet using World Time API
async function getCurrentYear() {
  try {
    const response = await fetch('http://worldtimeapi.org/api/ip');
    const data = await response.json();
    const currentDateTime = new Date(data.datetime);
    return currentDateTime.getFullYear();
  } catch (error) {
    console.error('Error fetching the current year:', error);
    alert("Give access to verify year. (press OK don't worry)");
    return new Date().getFullYear(); // Fallback to local time
  }
}


async function showMessage() {
  const messageDiv = document.getElementById('message');
  const birthdayImage = document.getElementById('birthdayImage');
  
  // Get the current year from the internet (or fallback to local)
  const currentYear = await getCurrentYear();

  
  if (currentYear == 2024) {
    message = `Happy birthday dum dum! A little bit of your sanity slips away every year. When you're completely demented, I'll be right there with you, wearing matching straightjackets. 🫶💦💦`;
    imageSrc = "mentalcats.png";
  } else if (currentYear == 2025) {
    message = `You're 20 yayyy, did you get your drinking license yet? 🎉`;
    imageSrc = "cassette_tape.png"; // image of a cassette tape
  } else if (currentYear == 2026) {
    message = `You're finally legal enough to marry raiyan ✨`;
    imageSrc = "party_hat.png"; // image of a party hat
  } else {
    message = `You're from the future? 😮`;
    imageSrc = "alien.png"; // funny alien image
  }

  // Display the message
  messageDiv.innerHTML = message;
  messageDiv.classList.remove('hidden');
  messageDiv.classList.add('visible');

  // Set the image source and make it visible
  birthdayImage.src = imageSrc;
  birthdayImage.classList.remove('hidden');
  birthdayImage.classList.add('visible');

  promptText.classList.remove('visible');
  promptText.classList.add('hidden');
}

