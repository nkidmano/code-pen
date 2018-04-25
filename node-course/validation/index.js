const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'network'],
    lowercase: true,
    // uppercase: true,
    trim: true
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v, callback) {
        setTimeout(() => {
          const result = v && v.length > 0;
          callback(result);
        }, 1000);
      },
      message: 'A course should have at least one tag.'
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { 
    type: Number, 
    required: function () { return this.isPublished; }, // required true or false based on isPublished property
    min: 10,
    max: 200,
    get: v => Math.round(v), // round when get it from db
    set: v => Math.round(v)   // round when set it to db
  }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'React Course',
    category: 'web',
    author: 'Mosh',
    tags: ['react', 'frontend'],
    isPublished: true,
    price: 20
  });
  
  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) {
    for (field in ex.errors)
      console.log(ex.errors[field].message);
  }
}

// createCourse();