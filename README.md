# React events 
En este proyecto vamos a consumir una API de Eventbrite para poder mostrar diferentes eventos de determinada categoría

## Registrarse en eventbrite
Debemos registrarnos en enventbrite y consegir un API key para poder hacer llamados y traer información desde la misma.

## Context API 
Está disponible desde la version 16.3, se puede pasar state o funciones desde el componente principal hacia los hijos sin necesidad de pasar cada componente.  
También se puede cambiar el state desde los hijos (o ejecutar una funsión que lo actualice)   
Los Props se pueden seguir utilizando, si el proyecto es sencillo es mejor usar Props en aplicaciones con 4 componentes o menos.  

## Palabras claves 

### Provider
Donde se crean los datos, state y funciones

### Consumer
donde se conumen los datos o se utilizan las funciones

## context en accion
Si tenemos un proyecto con 4 componentes podemos pasar datos desde nuestro componente padre al hijo directamente sin necesidad de pasar componente por componente, esto nos ayuda mucho a optimizar el código de nuestra aplicación.

Para este proyecto vamos a hacer la consulta con axios, que ya veremos más adelante como funciona. Se instala de la siguiente manera:

~~~sh
npm install --save axios
~~~

### Utilizando el context
El provider tiene todos los datos, entonces le podemos pasar al formulario muy facil importando el consumer en nuestro componente. Básicamente Context nos permite pasar datos de un componente a otro y evita la utilización de props.