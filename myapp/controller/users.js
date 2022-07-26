const axios = require('axios');
const Kakao = require('../util/kakaoApi')
const {sequelize} = require('../models')

module.exports = {
    signUp : async (req, res) =>{
        const kakaoData = await new Kakao(req.get('Authorization')).GetUserData()
        const pk        = kakaoData.id
        const userData  = {
            name        : kakaoData.properties.nickname,
            email       : kakaoData.kakao_account.email,
            phoneNumber : kakaoData.phoneNumber
        }

        query.getOrCreate(pk,userData)

        res.status(200).json(userData)
    }
}