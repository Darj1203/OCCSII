export default (config, DataTypes) => {
    const ApartamentosModel = config.define("Apartamento", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        torre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apartamento: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return ApartamentosModel;
};
