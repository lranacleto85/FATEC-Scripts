const db = require('./database');

db.all('SELECT * FROM usuarios', [], (err, rows) => {
    if (err) {
        console.error('Erro na consulta:', err.message);
    } else {
        console.log('Dados:', rows);
    }
});