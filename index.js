function scuberGreetingForFeet(someValue){
    if (someValue < 400) {
      return "This one is on me!";
    } else if (someValue < 2000) {
      return "That will be twenty bucks.";
    } else if (someValue < 2500) {
      return "I will gladly take your thirty bucks.";
    } else if (someValue > 2500) {
      return "No can do.";
    }
}

function ternaryCheckCity(destination){
  const message = destination === "NYC" ? "Ok, sounds good." : "No go.";
  return message;
}

function switchOnCharmFromTip(generosity){
  switch (generosity) {
    case 'generous': 
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    case 'thanks for everything':
      return "Bye."
      break;
  }
}