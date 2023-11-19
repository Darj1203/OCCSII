export default (config, DataTypes) => {
    const UsuariosModel = config.define("Usuarios", {
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return UsuariosModel;
};