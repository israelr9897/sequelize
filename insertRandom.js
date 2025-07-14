import UserActivity from "./moddles/UserActivity.js";

function random(max) {
  return Math.floor(Math.random() * max);
}

const names = ["Charlie", "Dana", "Eva", "Frank"];
const activities = ["Comment", "Like", "Share", "Logout"];

let countCreate = 0;
let countPrint = 0;

const createUser = setInterval(() => {
  UserActivity.create({
    name: names[random(names.length)],
    activity: activities[random(activities.length)],
  });
  countCreate++;
  if (countCreate == 4) {
    clearInterval(createUser);
  }
}, 10000);

const getAllUsers = setInterval(async () => {
  const allUsers = await UserActivity.findAll({ raw: true });
  console.table(allUsers);
  countPrint++;
  if (countPrint == 4) {
    clearInterval(getAllUsers);
  }
}, 30000);
