if (confirm('Почати тестування?')) {
   let boxesWarehouseNumber = 15;
   let boxesLoadTotal = 0;
   let machineСount = 0;

   do{
      let boxesLoadCurrent = parseFloat(prompt(`Скільки ящиків вантажити в машину №${machineСount + 1}`, 1));

      if (boxesLoadCurrent + boxesLoadTotal > boxesWarehouseNumber) {
         alert(`Залишилось всього ${boxesWarehouseNumber - boxesLoadTotal} ящиків`);
      } else {
         machineСount++;
         boxesLoadTotal += boxesLoadCurrent;
      }

   } while (boxesLoadTotal < boxesWarehouseNumber);

   let renderHTML = `
      <p>
         Завантажено всього ящиків: ${boxesLoadTotal} <br>
         Завантажено всього машин: ${machineСount}
      </p>
   `;
   document.write(renderHTML);
}