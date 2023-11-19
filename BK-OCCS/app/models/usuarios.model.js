export default (config, DataTypes, RolsModel) => {
    const UsuariosModel = config.define("Usuarios", {
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: RolsModel,
                key: 'id'
            }
        }
    })
    return UsuariosModel;
};