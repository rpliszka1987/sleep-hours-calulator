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

function getIdealSleepHours() {
  var idealHours = 8;
  return idealHours * 7;
}

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

calculateSleepDebt();
