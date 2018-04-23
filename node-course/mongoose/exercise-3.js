// require mongoose package
// connect to db
// define course schema
// define course model
// create async/await function that query course and return it
// create async/await function that display the result

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to mongoDB...'))
  .catch(err => console.error('Failed to connect to mongoDB', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  price: Number,
  isPublished: Boolean,
  date: Date
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  return await Course
    .find({ isPublished: true })
    .or([
      { price: { $gte: 15 } },
      { name: /.*by.*/i }
    ])
    .sort('-price')
    .select('name author price')
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();