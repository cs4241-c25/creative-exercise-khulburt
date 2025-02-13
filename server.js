const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (like index.html and others)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
