// require mongoose package
// connect to db
// define db schema
// define db model
// create get course async/await function that return the result
// create async/await function that display the result

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

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
    // .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] }})
    .find({ isPublished: true })
    .or([ { tags: 'frontend'}, { tags: 'backend'}])
    .sort('-price')
    .select('name author');
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();