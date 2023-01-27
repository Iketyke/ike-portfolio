import axios from 'axios';

const emailAPI = axios.create({baseURL: "https://tan-fox-kit.cyclic.app"})

export const sendEmail = (firstName, lastName, email, message) => {
    console.log("test")
    return emailAPI.post("/send-email", {firstName, lastName, email, message})
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
}
