export default (config, DataTypes) => {
    const ApartamentosModel = config.define("Apartamento", {
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
