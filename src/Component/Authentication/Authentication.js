import axios from "axios";

var checkUser = false;

function Authentication() {
    const url = "http://localhost:8090/api/v1.0/tweets/";
    const user = localStorage.getItem("loginId")

    axios.get(url + 'login/' + user)
        .then((e) => {
            console.log("Authentication == " + e.data);
            checkUser =  e.data;
        })
}
export { checkUser, Authentication }