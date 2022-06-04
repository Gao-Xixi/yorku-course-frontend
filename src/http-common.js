import axios from "axios";

export default axios.create({
    baseURL: "http://yorkucourseapi-env-2.eba-rpqkkrxq.us-east-1.elasticbeanstalk.com/api/",
    headers:{
        "Content-type": "application/json"
    }
})