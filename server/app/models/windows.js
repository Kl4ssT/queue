export default (sequelize, DataTypes) => {
   const Windows = sequelize.define('windows', {
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true
       },
       id_ticket: {
           type: DataTypes.INTEGER,
           allowNull: true
       },
       time: {
        type: DataTypes.INTEGER,
        defaultValue: 0
       },
       lastStart: {
        type: DataTypes.INTEGER
       },
       countClients: {
        type: DataTypes.INTEGER,
        defaultValue: 0
       },
   }, {
       timestamps: false
   });

   return Windows;
};