const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`Me ejecuto en https://localhost/`, app.get('port'))
})