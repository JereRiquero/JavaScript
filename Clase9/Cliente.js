class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fecharegirstro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fecharegirstro;
    }

    get _idCliente(){
        return this._idCliente;
    }

    get fecharegirstro(){
        return this._fechaRegistro;
    }

    set fecharegirstro(fecharegirstro){
        this._fechaRegistro = fecharegirstro;
    }

    toString(){
        return `
        ${super.toString()}
        ${this._idCliente}
        ${this._fechaRegistro}`;
    }
}