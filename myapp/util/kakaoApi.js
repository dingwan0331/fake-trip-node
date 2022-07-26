const axios = require('axios');

class KakaoError{
    constructor(err){
        this.massage = err.data.msg
        this.code    = err.data.code
        this.status  = 400  
    }
}

class Login {
    constructor(token){
        this.END_POINT = "https://kapi.kakao.com/v2/user/me"
        this.token     = token
    }

    async GetUserData() {
        const headers  = {headers : {Authorization : `Bearer ${this.token}`}}
        let userData   = {}
        await axios.get(this.END_POINT,headers).then (res => {userData = res.data}
        ).catch(err => {console.log(err.response.data)}); return userData
        }
    }

module.exports = Login