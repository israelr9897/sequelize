import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    titel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: false,
  }
);

Post.sync();

export default Post;