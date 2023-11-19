const app = Vue.createApp({
    data(){
        return{
            username: "",
            password: "",
            email: "",
            screen: "home"
        }
    },

    methods: {
        setUsername(newUsername){
            this.username = newUsername
        },
        setPassword(newPassword){
            this.password = newPassword
        },
        setEmail(newEmail){
            this.email = newEmail
        }
    }
})

app.mount("#app")

