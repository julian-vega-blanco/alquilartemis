const urlClientes = "http://localhost/ArTeM02-058/clase2/backend/controller.php?op=GetAll";

export const getClientes = async ()=>{
    try{
        const clientes = await fetch(urlClientes)
        const datosClientes = await clientes.json();
        return datosClientes
    }catch(error){
        console.log(error);
    }
}

export const nuevoClientes = async (registro)=>{
    try {
        await fetch(urlnuevoCliente,{
            method: "POST",
            body: JSON.stringify(registro),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {
        console.log(error);
    }
