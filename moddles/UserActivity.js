import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const UserActivity = sequelize.define(
  "UserActivity",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
UserActivity.sync();

export default UserActivity;