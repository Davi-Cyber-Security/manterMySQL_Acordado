import express from 'express';

import {getConnection} from "./connection/conexao.js";

const app = express();


async function manterConexao(){
    try{
        const Conection = await getConnection();
        await Conection.query('SELECT 1');
            console.log(`[${new Date().toISOString()}] Ping enviado com sucesso!`);
            await Conection.end();
    }catch(err){
        console.log(`[${new Date().toISOString()}] Erro: ${err.message}`);
    }
}

setInterval(manterConexao, 1000 * 60 * 10);
manterConexao();