let personName = "";
const toDoList = [];

function greetingsUser(command) {
  let userName = command.split(" ").slice(-1)[0];

  if (!personName) {
    personName = userName;
    return `Nice to meet you ${userName}`;
  } else {
    return `You already mention your name is : ${personName}`;
  }
}

function getName() {
  if (personName) {
    return `Your name is ${personName}`;
  } else {
    return `I dont know your name.`;
  }
}

function addFishInMyTodo() {
  toDoList.push("fishing");
}

function addSingingInTodo() {
  toDoList.push("singing in the shower");

  return "Singing in the shower added to my todo";
}

function removeFishFromTodo() {
  let index = toDoList.indexOf("fishing");
  if (index !== -1) {
    toDoList.splice(index, 1);
  }

  return "Removed fishing from your todo";
}

function checkTodoList() {
  return `You have ${toDoList.length} todos - ${toDoList[0]} and ${toDoList[1]}`;
}

function getDay() {
  const months = [
    "January",
    "February",
    "May",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const day = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

function calculation(command) {
  const number1 = parseFloat(command.split(" ")[2]);
  const operator = command.split(" ")[3];
  const number2 = parseFloat(command.split(" ")[4]);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    console.log("cannot perform mathematical operations");
    return "error";
  }

  let result;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (number2 === 0) {
        result = "division by zero";
      } else {
        result = number1 / number2;
      }
      break;

    default:
      return "I did not understand the expression";
  }
  return `The result of the expression  is ${result}`;
}

function setTimer(command) {
  const timer = parseFloat(command.split(" ")[4]);

  setTimeout(function () {
    console.log("Timer is done");
  }, timer * 60 * 1000);
  if (timer === 1) {
    return `Timer set for ${timer} minute`;
  } else return `Timer set for ${timer} minutes`;
}

function getReply(command) {
  switch (true) {
    case command.startsWith("Hello my name is"):
      return greetingsUser(command);

    case command === "What is my name?":
      return getName();

    case command === "Add fishing to my todo":
      addFishInMyTodo();
      return "Fishing added to your todo";

    case command === "Add singing in the shower to my todo":
      return addSingingInTodo();

    case command === "Remove fishing from my todo":
      return removeFishFromTodo();

    case command === "What is on my todo?":
      return checkTodoList();

    case command === "What day is it today?":
      return getDay();

    case command.startsWith("what is"):
      return calculation(command);

    case command.startsWith("Set a timer for"):
      return setTimer(command);

    default:
      return "I don't know this command";
  }
}
//console.log(getReply("Hello my name is Noah"));
//console.log(getReply("Hello my name is Benjamin"));
console.log(getName());
//console.log(getReply("Add fishing to my todo"));
//console.log(getReply("Add singing in the shower to my todo"));
//console.log(toDoList);
//console.log(getReply("Remove fishing from my todo"));
// console.log(toDoList);
//console.log(getReply("What is on my todo?"));
// console.log(getReply("What day is it today?"));
// console.log(getReply("what is 3 + 5"));
// console.log(getReply("Set a timer for 1 minutes"));
