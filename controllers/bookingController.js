import Booking from '../models/bookingModel.js';

export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        
        if (!bookings || bookings.length === 0) {
            res.status(404).send("No bookings found.");
        } else {
            res.status(200).json({ bookings });
        }
    } catch (e) {
        return res.status(500).send("Failed to retrieve bookings.");
    }
};

export const getUsersBooking = async (req, res) => {
    try {
        const userId = req.params.id;
        
        if (!userId) return res.status(400).send("User ID is required.");

        const bookings = await Booking.find({ user: userId });

        if (bookings.length === 0) return res.status(404).send("No bookings found for this user.");

        return res.status(200).json({ bookings });
    } catch (e) {
        return res.status(500).json({ error: "Failed to search bookings." });
    }
};

export const getOneBooking = async (req, res) => {
    try {
        const id = req.params.book;
        const booking = await Booking.findById(id);

        if (!booking) return res.status(404).send("No booking found.");

        return res.status(200).json({ booking });
    } catch (e) {
        return res.status(500).json({ error: "Failed to search booking." });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { user, car, startDate, endDate, totalCost, pickupLocation, returnLocation} = req.body;

        const newBooking = await Booking.create({ user, car, startDate, endDate, totalCost, pickupLocation, returnLocation});
        if (newBooking) res.status(201).json({ newBooking });

    } catch (e) {
        return res.status(500).json({ error: "Failed to create booking." });
    }
};

export const updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedBooking = req.body;

        const booking = await Booking.findById(id);
        if (!booking) return res.status(404).json({ error: "Booking not found." });

        Object.keys(updatedBooking).forEach(key => {
            booking[key] = updatedBooking[key];
        });

        await booking.save();
        res.status(200).json({ booking });
    } catch (e) {
        return res.status(500).json({ error: "Couldn't update booking." });
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;

        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) return res.status(404).json({ error: "Couldn't find booking" });

        return res.status(204).send("Deleted Successfully!");
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};