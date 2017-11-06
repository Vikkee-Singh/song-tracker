
module.exports = (sequelize, DataTypes) => {
    
    const Songs = sequelize.define('Songs', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImage: DataTypes.STRING,
        youtubId: DataTypes.STRING,
        lyrics: DataTypes.STRING,
        tab: DataTypes.STRING
    })
    return Songs
}