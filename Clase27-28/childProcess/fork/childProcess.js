function sumar() {
    let suma = 0
    for (let i = 0; i < 5e9; i++) {
      suma += i
    }
    return suma
  }

  process.on('message',message=>{
    console.log('iniciando subproceso')
    const resultado = sumar()
    process.send(resultado)
    console.log('terminando subproceso')
    process.exit()
  })