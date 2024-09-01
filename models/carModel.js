import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    category: String,
    price_for_3_days: Number,
    availability: Boolean,
    location: String,
    imageUrl: String,
    seats: Number,
    transmission: String,
});

const Car = mongoose.model('Car', carSchema);

export default Car;