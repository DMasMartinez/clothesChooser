

const Validation = (usuario) =>{
    const objerror = {}
    if (usuario.height===""){
        objerror.height = "the space still blank"
    }else{
        if (usuario.height<120 || usuario.height>230){
            objerror.height = "the height value are not right"
        }
    }
    if (usuario.weight ===""){
        objerror.weight = "you already didnt fill the space"
    }else{
        if (usuario.weight<50 || usuario.weight>130){
            objerror.weight = "the weight value are not right"
        }
    }
    if (usuario.objetives===""){
        objerror.objetives ="you already didnt choose an option"
    }
    if (usuario.typeofbody===""){
        objerror.typeofbody="you already didnt choose an option"
    }
    return objerror
}

export default Validation;