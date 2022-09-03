import axios from "axios";

var checkUser = false;

function Authentication() {
    const url = "http://tweetapp-env.eba-v9d5vtkk.us-west-1.elasticbeanstalk.com/api/v1.0/tweets/";
    const user = localStorage.getItem("loginId")

    axios.get(url + 'login/' + user)
        .then((e) => {
            console.log("Authentication == " + e.data);
            checkUser =  e.data;
        })
}
export { checkUser, Authentication }