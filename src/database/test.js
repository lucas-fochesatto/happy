const Database = require('./db.js')
const saveOrphanage = require('./save-orphanage.js')

Database.then(async (db) => {
    //inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: '-27.222633',
        lng: '-49.6555874',
        name: 'Lar das Meninos',
        description: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: "35991704622",
        images: [
            'https://images.unsplash.com/photo-1602488257131-7751faf0cca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        openingHours: 'Horário de visitas Das 18h até 8h',
        openOnWeekends: '1'
    })

    const selectedOrphanages = await db.all('SELECT * FROM orphanages')
    console.log(selectedOrphanages)*/

    //await db.run('UPDATE orphanages SET open_on_weekends = "0" WHERE id = 2');
})