const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.update({ _id: courseId }, {
    // $set: {
    //   'author.name': 'John Smith'
    // }
    $unset: {
      'author': ''
    }
  });
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

// createCourse('Node Course', new Author({ name: 'Mosh' }));

// updateAuthor('5ae35d5c808bd30b94851447');

// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'John'})
// ]);

// addAuthor('5ae3617d157b19278c58f8f4', new Author({ name: 'Amy' }));
removeAuthor('5ae3617d157b19278c58f8f4', '5ae36239a23c4123f829cf8c');
