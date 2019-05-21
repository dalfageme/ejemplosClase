
// escape: deprecated, do not use
console.log(escape('go.com/david~hola'))

// decodeURI: Usar para codificar una URL, ya que codifica los símbolos que no están permitidos en una URL.
console.log(decodeURI(encodeURI('go.com\/david~hola')))

// encodeURIComponent: Usar para codificar los parámetros de su URL
console.log(encodeURIComponent('go.com\/david~hola'));