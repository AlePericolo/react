import axios from 'axios'

const baseUrl = "http://localhost:3001/users"

class Service {

    static checkLogin(data){
        const filter = "?user="+data.username+"&password="+data.password;
        return axios.get(baseUrl + filter)
    }

    static getUserById(id){
        const filter = "?id="+id;
        return axios.get(baseUrl + filter)
    }

    static saveUser(data){
        console.log(data);
        return axios.post(baseUrl + '/', data)
    }

    
}

export default Service