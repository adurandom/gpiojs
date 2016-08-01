//|   led_1.js
//|   Primer programa de acceso a GPIO usando rpio.

var rpio = require('rpio');

// Inicializar los pines a utilizar.

var red     = 11;
var green   = 12;

// Abrir los pines para salida estableciendo el nivel de salida bajo.

rpio.open(red, rpio.OUTPUT, rpio.LOW);
rpio.open(green, rpio.OUTPUT, rpio.LOW);

// Bucle principal.

for (var i = 0; i < 5; i++) {
   rpio.write(red, rpio.HIGH);         // Encender LED rojo
   rpio.sleep(1);
   rpio.write(red, rpio.LOW);          // Apagar LED rojo
   rpio.msleep(500);
   rpio.write(green, rpio.HIGH);       // Encender LED verde
   rpio.sleep(1);
   rpio.write(green, rpio.LOW);        // Apagar led verde
   rpio.msleep(500);
}