const mongoose = require("mongoose");

const schema = mongoose.Schema;

const enrollmentSchema = new schema(
  {
    username: { type: String, required: true },
    status: { type: String, required: true },
    vin: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports=mongoose.model("Enrollment",enrollmentSchema);