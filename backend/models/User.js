const mongose=require("mongoose")

const userSchema=new mongose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    countryName: {
        type: String,
        required: true,
        trim: true,
    },
    countryCode: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true, 
        match: /.+\@.+\..+/ 
    },
},{timestamps:true})

const User = mongose.model('User', userSchema);

module.export= User;
