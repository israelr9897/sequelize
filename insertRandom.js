import UserActivity from "./moddles/UserActivity.js";

function random(max) {
  return Math.floor(Math.random() * max);
}

const names = ["Charlie", "Dana", "Eva", "Frank"];
const activities = ["Comment", "Like", "Share", "Logout"];

setInterval(() => {
  UserActivity.create({
    name: names[random(names.length)],
    activity: activities[random(activities.length)],
  });
}, 10000);

setInterval(async () => {
  const allUsers = await UserActivity.findAll({ raw: true });
  console.table(allUsers);
}, 30000);
