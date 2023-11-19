export default (config, DataTypes, ApartamentoModel) => {
    const ContactosModel = config.define("Contactos", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        celular: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        apartamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: ApartamentoModel,
                key: 'id'
            }
        }
    })
    return ContactosModel;
};