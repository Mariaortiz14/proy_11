/*const {Producto,ProductosTienda} = require('./clases');: Esta línea importa las 
clases Producto y ProductosTienda desde el archivo clases.js.*/
const {Producto,ProductosTienda} = require('./clases');
/*const {Producto,ProductosTienda} = require('./clases');: Esta línea importa las clases
 Producto y ProductosTienda desde el archivo clases.js.*/ 
const nuevosProductos = async ()=> {
  //crea una clase producto
  const producto = new Producto ();
  
  console.log('************************************************'.yellow);
  console.log('*'.yellow+'             Datos nuevo producto            **'.yellow);
  console.log('************************************************\n'.yellow);
  //utiliza el bucle await para recopilar los datos del producto del usuario utilizando una funcion
  //establece los valores de los atributos del producto utilizando datos
  //devuelve el producto creado
  mensaje = 'Digite codigo del producto => ';
  producto.setCodigoProducto = await digitarDato(mensaje);
  
  mensaje = 'Digite Nombre del producto => ';
  producto.setNombreProducto = await digitarDato(mensaje);
  
  mensaje ='Digite Inventario del producto => ';
  opt = await digitarDato (mensaje);
  producto.setInventarioProducto = parseInt (opt);
  
  mensaje = 'Digite Precio del producto => ';
  opt = await digitarDato(mensaje);
  producto.setPrecioProducto= parseFloat (opt);
  return producto;
  
}
//esta funcion lee un dato ingresado por el usurio en la consola y lo devuelve como resultado
const digitarDato = (mensaje) =>{
    return new Promise( resolve =>{
      
      const readline = require ('readline').createInterface({
        
        input: process.stdin,
        output: process.stdout
      });

    readline.question(`${mensaje}`, (opt) => {
        
      readline.close(); 
      resolve(opt);
    })
    })
}
  /*esta funcion  es utilizada pra pausar la ejecucuin del programa hasta que el usuario presione 
  la tecla 'enter', esto permite al usuario leer los datos ingresados antes de que se ejecute cualquier
  codigo adicional
  */
  const pausa = () =>{
    return new Promise( resolve =>{
      
      const readline = require ('readline').createInterface({
        
        input: process.stdin,
        output: process.stdout
      });
      
      readline.question(`\nPresione ${'ENTER'} para continuar\n`, (opt)=> {
        
        readline.close();
        resolve();
      })
    })
  }
  //se exportan los modulos para que se puedan utiizar en otros modulos de node.js
  module.exports ={
    pausa,
    digitarDato,
    nuevosProductos
    }
