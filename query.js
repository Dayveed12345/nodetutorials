const app = require('express')();
app.get('/:name', (req, res) => {
    if (req.params.name) {
        res.send(`My name is ${req.params.name}`);
    } else {
        res.send(`My name is Emeka`);
    }
});
app.listen(5000, () => {
    console.log("Server started");
});
