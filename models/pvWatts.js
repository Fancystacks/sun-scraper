module.exports = function(sequelize, DataTypes) {
    const pvData = sequelize.define("pvData", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING
      },
      MTR_NUM: {
        type: DataTypes.STRING
      },
      DATE: {
        type: DataTypes.STRING
      },
      TIME: {
        type: DataTypes.STRING
      },
      MONTH: {
        type: DataTypes.STRING
      },
      WEEKDAY: {
        type: DataTypes.STRING
      },
      peak_kW: {
        type: DataTypes.STRING
      },
      PEAK_kWH: {
        type: DataTypes.STRING
      },
      kWh: {
        type: DataTypes.STRING
      },
      kW: {
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
  
    pvData.associate = function(models) {
        pvData.belongsTo(models.User, {
            targetKey:'email',
            foreignKey: {
              name: 'email',
              allowNull: false
            }
        });
        
      };
  
    
    return pvData;
  }

  