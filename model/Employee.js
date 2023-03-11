const Mongoose = require("mongoose");

const employeeSchema = new Mongoose.Schema(
    {
        Name: String,
        Location: String,
        Position: String,
        Salary: Number
    }
);

const employeeModel = Mongoose.model("employees", employeeSchema);

module.exports = {employeeModel}