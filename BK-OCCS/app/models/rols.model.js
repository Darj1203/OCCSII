export default (config, DataTypes) => {
    const RolsModel = config.define("Rols", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return RolsModel;
};