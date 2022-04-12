<template>
 <div class="principal">
    <div class="login">
        <div class="login-img">
            <img src="../assets/img/gohan.jpg">
        </div>
        <h1>Iniciar Sesión ¡Bienvenido!</h1>
        <form>
            <label for="txt-usuario">Usuario</label>
            <input type="text" name="txt-usuario"><br>
            <label for="txt-password">Password</label>
            <input type="password" name="txt-password"><br>
            <input type="submit" name="login" value="Iniciar sesión"><br>
        </form>
    </div>
</div>

</template>

<script>
export default {
  name: 'MiLogin',
  props: {
    msg: String
  }
}
</script>

<style>
  .principal{
    width: 100%;
    height: 100%;
    background-image: url("../assets/img/goku.jpg");  
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: fixed;
}

.login{ 
    padding: 10px;
    width: 300px;
    height: 450px;
    background-color: white;
    border-radius: 25px;
    opacity: 0.9;
    margin: 100px auto;
}

h1{
    text-align: center;
    color: #05007F;
}

form{
    width: 100%;
}

input[type="text"],input[type="password"],input[type="submit"]{
    display: block;
    width: 80%;
    height: 20px;
    margin: 5px auto;
    color: #05007F;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline:none;
}

input[type="text"],input[type="password"]:focus{
    outline:none;
    border: none;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}

input[type="text"],input[type="password"]:active {
    border: none;
    outline:none;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}

input[type="submit"]{
    background-color: blue;
    color:white;
    height: 30px;
    border-radius: 4px;
}

label{
    display: block;
    width: 80%;
    margin: 5px auto;
    color: #05007F;
}

img{
    width: 100%;
    height: 100%;
}


.login-img{
    display: block;
    overflow: hidden;
    width: 200px;
    height: 150px;
    border-right: 10px;
    border-radius: 40px;
    margin: 0px auto;
}
</style>

