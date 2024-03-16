const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    body: {type: DataTypes.TEXT, allowNull: false},
    image: {type: DataTypes.BOOLEAN}    
}, {
    timestamps: false
}
)

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    body: {type: DataTypes.TEXT, allowNull: false},
    right: {type: DataTypes.BOOLEAN}    
}, {
    timestamps: false
}
)

//connection

Question.hasMany(Answer)
Answer.belongsTo(Question)

module.exports = {
    Question,
    Answer
}