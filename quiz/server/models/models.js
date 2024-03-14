const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const Question = sequelize.define('question', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    body: {type: DataTypes.STRING, allowNull: false},
    image: {type: DataTypes.BOOLEAN}    
})

const Answer = sequelize.define('answer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    body: {type: DataTypes.STRING, allowNull: false},
    right: {type: DataTypes.BOOLEAN}    
})

//connection

Question.hasMany(Answer)
Answer.belongsTo(Question)

module.exports = {
    Question,
    Answer
}