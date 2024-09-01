import Car from '../models/carModel.js';
import mongoose from 'mongoose';

export const getCars = async (req, res) => {
    try {
        await removeDuplicateCars();
        const cars = await Car.find();

        if (!cars || cars.length === 0) {
            return res.status(404).send("No Cars found.");
        } else {
            return res.status(200).json({ cars });
        }
    } catch (e) {
        return res.status(500).send("Failed to retrieve cars.");
    }
};

export const getCar = async (req, res) => {
    try {
        const id = req.params.id;
        const car = await Car.findById(id);

        if (!car) return res.status(404).send("No Car found.");

        return res.status(200).json({ car });
    } catch (e) {
        return res.status(500).json({ error: "Failed to search car." });
    }
};

export const createCar = async (req, res) => {
    try {
        await removeDuplicateCars();
        const newCar = await Car.create(req.body);
        if (newCar) return res.status(201).json({ newCar });
    } catch (e) {
        return res.status(500).json({ error: "Failed to create car." });
    }
};

export const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCarData = req.body;

        const car = await Car.findByIdAndUpdate(id, updatedCarData, { new: true });

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        return res.status(200).json({ car });
    } catch (e) {
        return res.status(500).json({ error: "Couldn't update car." });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const id = req.params.id;

        const car = await Car.findByIdAndDelete(id);
        if (!car) return res.status(404).json({ error: "Couldn't find car" });

        return res.status(204).send("Deleted Successfully!");
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};


async function removeDuplicateCars() {
    try {
        // Step 1: Group documents by the fields you want to check for duplicates
        const duplicates = await Car.aggregate([
            {
                $group: {
                    _id: {
                        make: "$make",
                        model: "$model",
                        category: "$category",
                        price_for_3_days: "$price_for_3_days",
                        location: "$location",
                        seats: "$seats",
                        transmission: "$transmission"
                    },
                    count: { $sum: 1 },
                    docs: { $push: "$_id" }
                }
            },
            {
                $match: {
                    count: { $gt: 1 } // Keep only groups with more than one document
                }
            }
        ]);

        // Step 2: Remove duplicates
        for (const doc of duplicates) {
            const [keep, ...remove] = doc.docs;
            await Car.deleteMany({ _id: { $in: remove } });
        }

        console.log("Duplicates removed successfully.");
    } catch (error) {
        console.error("Error removing duplicates:", error);
    }
}
