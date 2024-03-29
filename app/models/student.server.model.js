//Load the module dependencies:
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const saltRounds = 10;

//Define a schema
const Schema = mongoose.Schema;

var StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    phoneNumber: Number,
    program: String,
    favoriteTopic: String,
    favoriteSubject: String,
    email: {
		type: String,
		// Validate the email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
	},
    studentId: { 
        type: String,
        unique: true,
        required: "Student ID is required",
        trim: true
    },
    password: {
        type: String,
        validate: [
            (password) => password && password.length > 6,
            'Password should be longer'
        ]
    }
});

//Set the 'fullname' virtual property
StudentSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
    const splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});

//Use a pre-save middleware to hash the password
//before saving it into database
StudentSchema.pre('save', function(next) {
    this.password = bycrypt.hashSync(this.password, saltRounds);
    next();
});

//Create an instance method for authenticating user
StudentSchema.methods.authenticate = function(password) {
    return this.password === bycrypt.hashSync(password, saltRounds);
};

//Configure the 'StudentSchema' to use getters and virtuals when transforming to JSON
StudentSchema.set('toJSON', {
    getters: true,
    virtuals: true
});

//Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);

    

