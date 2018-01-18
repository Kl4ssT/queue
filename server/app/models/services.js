export default (sequelize, DataTypes) => {
    const Services = sequelize.define('services', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        identifier: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return Services;
};