//Parsear si el rut introducido por el usuario es correcto
export const parseRutUsuario = (RutUsuarioFromRequest: any): string => {
  if (!isString(RutUsuarioFromRequest) || !isValidRut(RutUsuarioFromRequest)) { // 
    throw new Error('Error al introducir el rut')
  }
  return RutUsuarioFromRequest
}

//Parsear si el nombre introducido por el usuario es correcta
export const parseNombreUsuario = (NombreUsuarioFromRequest: any): string => {
  if (!isString(NombreUsuarioFromRequest)) {
    throw new Error('Error en el nombre del usuario')
  }
  return NombreUsuarioFromRequest
}

//Parsear si el email ingresado es valido
export const parseCorreoUsuario = (CorreoUsuarioFromRequest: any): string => {
  if (!isValidUserEmail(CorreoUsuarioFromRequest)) {
    throw new Error('El Email ingresado es incorrecto')
  }
  return CorreoUsuarioFromRequest
}

//Parsear si la contraseña ingresada es valida
//https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
export const parseContrasenaUsuario = (ContrasenaUsuarioFromRequest: any): string => {
  if (!isString(ContrasenaUsuarioFromRequest)) { //|| isUserPassword(UserPasswordFromRequest) 
    throw new Error('La contraseña no es valida')
  }
  return ContrasenaUsuarioFromRequest
}

//Parsear si la direccion ingresada es correcta
export const parseDireccionUsuario = (DireccionUsuarioFromRequest: any): string => {
  if (!isString(DireccionUsuarioFromRequest)) {
    throw new Error('La direccion ingresada no es correcta')
  }
  return DireccionUsuarioFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isValidRut = (string: string): boolean => {
  const userRut = /^[0-9]{2}\.[0-9]{3}.[0-9]{3}-[0-9]{1}?$/;
  const valid = userRut.test(string);
  return valid
}
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting
export const isValidUserEmail = (string: string): boolean => {
  const userUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const valid = userUserEmail.test(string);
  return valid
}

//https://estradawebgroup.com/Post/Como-validar-que-las-contrasena-que-capturan-tus-usuarios-son-seguras-con-jQuery/4228
//No funciona
export const _isUserPassword = (string: string): boolean => {
  var strength = 0
  if (string.length < 6) {
    //return 'Too short'
    return false
  }
  if (string.length > 7) strength += 1
  // If userPassword contains both lower and uppercase characters, increase strength value.
  if (string.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
  // If it has userPassword and characters, increase strength value.
  if (string.match(/([a-zA-Z])/) && string.match(/([0-9])/)) strength += 1
  // If it has one special character, increase strength value.
  if (string.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
  // If it has two special characters, increase strength value.
  if (string.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
  // Calculated strength value, we can return messages
  // If value is less than 2

  //Revisar como implementar esto de forma dinamica
  if (strength < 2) {
    //return 'Weak'
    return false
  } else if (strength == 2) {
    //return 'Good'
    return true
  } else {
    //return 'Strong'
    return true
  }

}