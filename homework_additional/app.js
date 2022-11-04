const obj = {
  field1: '1',
  field2: '2',
  field3: '3',
  field4: {
    field1: '11',
    field2: '21',
    field3: '31',
    field4: {
      field1: '12',
      field2: '22',
      field3: '32',
      field4: '42'
    }
  }
}

function objToConsole(object) {
  for (let key in object) {
    if (typeof (object[key]) === 'object') {
      objToConsole(object[key]);
    } else {
      console.log("Ключ: " + key + ";" + " значение: " + object[key] + ";")
    }
  }
}

objToConsole(obj)