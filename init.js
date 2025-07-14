import UserActivity from "./moddles/UserActivity.js";

try {
  console.log("Table create");
  const initalData = [
    { name: "Alice", activity: "Login" },
    { name: "Bob", activity: "Upload Photo" },
  ];

  UserActivity.bulkCreate(initalData);
  console.log("Initial data inserted.");
} catch (error) {
  console.error("Error inserting data:", error);
} finally {
//   await sequelize.close();
}
