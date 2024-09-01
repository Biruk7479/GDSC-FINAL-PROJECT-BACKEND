import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authorize(allowedRoles) {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).json({ error: 'Empty token' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the user's role is in the list of allowed roles
            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).json({ error: 'Unauthorized access' });
            }

            req.user = decoded;
            next();
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    };
}

export default authorize;