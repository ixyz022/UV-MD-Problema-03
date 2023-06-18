import db from '../../models'
const mercado = db.Mercado
const producto = db.Producto

export const parseNombreSeccion = (NombreSeccionRequest: any): string => {
    if (!isString(NombreSeccionRequest)) {
        throw new Error('Error en el nombre de la seccion')
    }
    return NombreSeccionRequest
}

export const parseDescription = (DescriptionFromRequest: any): string => {
    if (!isString(DescriptionFromRequest)) {
        throw new Error('La description entregada no es valida')
    }
    return DescriptionFromRequest
}


export const parseIdMercado = (IdMercadoRequest: any): string => {
    if (!isString(IdMercadoRequest)) {
        throw new Error('EL identificador de mercado es incorrecto')
    }
    return IdMercadoRequest
}

export const parseIdProducto = (IdProductoRequest: any): string => {
    if (!isString(IdProductoRequest)) {
        throw new Error('El id del producto es incorrecto')
    }
    return IdProductoRequest
}

export const isIdMercado = async (param: any): Promise<boolean> => {
    const isIdMercado = await mercado.findByPk(param).then((resultado: any) => {
        if (resultado == null) {
            return false;
        }
        return resultado instanceof mercado
    })
    return isIdMercado
}

export const isIdProducto = async (param: any): Promise<boolean> => {
    const IdProducto = await producto.findByPk(param).then((resultado: any) => {
        if (resultado == null) {
            return false;
        }
        return resultado instanceof producto
    })
    return IdProducto
}

export const isString = (string: string): boolean => {
    return typeof string === 'string'
}

export const isNumber = (number: number): boolean => {
    return typeof number === 'number'
}