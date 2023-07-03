import { Sequelize } from "sequelize";
import db from "../database.js";

const { DataTypes } = Sequelize;

const Rolemodel = db.define("Rolemodel", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
 
});

export default Rolemodel;