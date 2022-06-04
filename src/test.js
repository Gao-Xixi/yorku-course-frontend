import axios from "axios";

const data = await axios.get("http://yorkucourseapi-env-2.eba-rpqkkrxq.us-east-1.elasticbeanstalk.com/");
console.log(data);
