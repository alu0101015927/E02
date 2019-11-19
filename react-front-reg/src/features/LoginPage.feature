Feature: The Login Page
Scenario: Render all elements in the Login Page
Render the login form,username form-group and password form-group
When the username is not inserted and submit button has been clicked should output an ERROR
If the password in the password form group is not inserted and login button has been clicked then it should output an ERROR
Si se ha comprobado en el backend la validez de los datos se pone a true el flag de loggingIn
En caso de que el usuario no este registrado y se quiere registrar acceder al formulario de Registro a traves del enlace Register
