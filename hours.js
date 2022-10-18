// Sleep calculating simple code

// Users sleep hours per day of the week.
function getSleepHours(day) {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Please make a valid selection";
      break;
  }
}

// Total of hours users sleeps per week
function getActualSleepHours() {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
}

// Perfect amount of sleep hours per week
function getIdealSleepHours() {
  var idealHours = 8;
  return idealHours * 7;
}

// Function checks if user gets the recomended amount of sleep per week
function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    var difference = actualSleepHours - idealSleepHours;
    console.log(`You got ${difference} hours more sleep than needed.`);
  } else if (actualSleepHours < idealSleepHours) {
    var difference = idealSleepHours - actualSleepHours;
    console.log(`You need to get ${difference} hours more of sleep.`);
  }
}

// Calling the function to run the code.
calculateSleepDebt();
