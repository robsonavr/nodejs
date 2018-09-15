const sql  = require('mssql');

async()=>{
    try {
        await sql.connect('mssql://sa:Eletr1ca@192.168.0.31:1433/db_accessadmin');
        const result = await sql.query`select * from Contacts`;
        console.dir(result)
    } catch (err) {
        console.log('Erro no database');
    }
}
