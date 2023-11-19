
export default (config, DataTypes, RolsModel) => {
    const UsuariosModel = config.define("Usuarios", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
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
    });
    return UsuariosModel;
};