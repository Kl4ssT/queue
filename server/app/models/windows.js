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
       }
   }, {
       timestamps: false
   });

   return Windows;
};