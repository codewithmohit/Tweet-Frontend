import axios from "axios";

var checkUser = false;

function Authentication() {
    const url = "http://http://tweet-env.eba-34tepn6j.us-east-1.elasticbeanstalk.com/api/v1.0/tweets/";
    const user = localStorage.getItem("loginId")

    axios.get(url + 'login/' + user)
        .then((e) => {
            console.log("Authentication == " + e.data);
            checkUser =  e.data;
        })
}
export { checkUser, Authentication }