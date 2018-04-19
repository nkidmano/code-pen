const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'],
    isPublished: true
  });
  
  const result = await course.save();
  console.log(result);
}


    // .find({ price: { $gt: 10, $lte: 20 } }) => greater than
    // .find({ price: { $in: [10, 15, 20] } }) => query in array value

    // .find() => logical query and or
    // .or([ { author: 'Mosh' }, { isPublished: true } ])
    // .and([ { author: 'Mosh' }])

    // query string starts with Mosh
    // .find({ author: /^Mosh/ })

    // query string ends with Hamedani
    // .find({ author: /Hamedani$/i }) // "i" mean no case sensitive

    // query string contains Mosh
    // .find({ author: /.*Mosh.*/ })

async function getCourses() {
  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .limit(10)
    .sort({ name: 1 }) // sort the document in the ascended order
    .select({ name: 1, tags: 1 })
    .count();
  console.log(courses);
}

getCourses();