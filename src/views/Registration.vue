<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>
            <v-text-field
                label="Введите ваше имя"
                v-model="name"
                outlined
            ></v-text-field>
            <v-text-field
                label="Введите ссылку на картинку"
                v-model="photo"
                outlined
            ></v-text-field>

            <v-btn @click="registrate">
                Зарегистрироваться
            </v-btn>
            <v-btn  link to="../login" class="ml-4" >
                Залогиниться
            </v-btn>
        </v-card>
        
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            login: this.login,
            password: this.password,
            name: this.password,
            photo: this.photo,
            users: '',
        }
    },
    methods:{
        
        registrate(){
            this.axios.get('http://37.77.104.246/api/jsonstorage/?id=6f9e4dc77f30e9ce597b7339a4676960')
            .then(
                (response) => {
                    this.users = response.data;
                    this.users[this.users.length] = ({login: this.login,
                    password: this.password,
                    name: this.name,
                    photo: this.photo})
                    console.log(this.users);
                })
            this.axios({
                method: 'PUT',
                url: 'http://37.77.104.246/api/jsonstorage/?id=6f9e4dc77f30e9ce597b7339a4676960',
                data: this.users,
            }).then((response) => {
                console.log(response);
            })
            
        }
    }
}
</script>