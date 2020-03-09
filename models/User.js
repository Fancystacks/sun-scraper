module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    street_address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    home_state: {
      type: DataTypes.STRING
    },
    zip_code: {
      type: DataTypes.STRING
    },
    zip_code: {
      type: DataTypes.STRING
    },
    system_capacity: {
      type: DataTypes.STRING
    },
    array_type: {
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    timestamps: false
  })
  return User;
}