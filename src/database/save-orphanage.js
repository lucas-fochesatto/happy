function saveOrphanage (db, orphanage) {
    return db.run(`
    INSERT INTO orphanages (
        lat, 
        lng, 
        name, 
        about, 
        whatsapp, 
        images, 
        instructions, 
        opening_hours, 
        open_on_weekends
    ) VALUES (
        "${orphanage.lat}", 
        "${orphanage.lng}", 
        "${orphanage.name}", 
        "${orphanage.description}", 
        "${orphanage.whatsapp}", 
        "${orphanage.images}", 
        "${orphanage.instructions}", 
        "${orphanage.openingHours}", 
        "${orphanage.openOnWeekends}"
    );
`)
}

module.exports = saveOrphanage