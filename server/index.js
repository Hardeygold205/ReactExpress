const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

app.get("/api/data", (req, res) => {
    res.json({ data: "Hello, Vite!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

