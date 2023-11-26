export default (config, DataTypes, ApartamentoModel) => {
    const ContactosModel = config.define("Contactos", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
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