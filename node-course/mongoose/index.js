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
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 }) // sort the document in the ascended order
    .select({ name: 1, tags: 1 })
    .count();
  console.log(courses);
}
// Query first approach
// async function updateCourse(id) {
//   const course = await Course.findById(id);
//   if (!course) return;

//   // course.isPublished = true;
//   // coures.author = 'Another author';

//   course.set({
//     isPublished: true,
//     author: 'Another author'
//   });

//   const result = await course.save();
//   console.log(result);
// }

// Update first approach
async function updateCourse(id) {
  // const result = await Course.update({ _id: id }, {
  const course = await Course.findByIdAndUpdate(id, {
    $set: {
      author: 'Jason',
      isPublished: false
    }
  }, { new: true });
  console.log(course);
}

async function removeCourse(id) {
  // const result = await Course.deleteOne({ _id: id });
  const course = await Course.findByIdAndRemove(id)
  console.log(course);
}

removeCourse('5ad477ea9f60f720a0ab8ecd');