// Pomodoro.js
const mongoose = require('mongoose');

const PomodoroSchema = new mongoose.Schema({
    // 
    title: { type: String, required: true, trim: true},
    description: { type: String },
    workTime: { type: Number, required: true },
    shortBreakTime: { type: Number, required: true },
    longBreakTime: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// connect to MongoDB 
mongoose.connect(
"mongodb+srv://morostagrm:Password123@pomodoro.lpayvou.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("Successful  to connect Databse"))
.catch((err) => console.log(err))


//  it may ne need 
PomodoroSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});
  
//   module.exports = mongoose.model('Pomodoro', PomodoroSchema);

const Pomodoro = mongoose.model('Pomodoro', PomodoroSchema);

module.exports = Pomodoro;