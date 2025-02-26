const app = require("./app.js");

const PORT = process.env.PORT || 5443;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});