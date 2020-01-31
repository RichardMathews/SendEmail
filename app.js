const express = require('express');
const nodemailer = require ('nodemailer');
const app = express();

const port = 3000;
const user = ""//email registrado
const pass = ""//senha do email registrado

app.get('/', (req, res) => res.send('Hello Wolrd'));

//Registrando o email para enviar as mensagens 
app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "", //SMTP do local de hospedagem
        port: "", //Porta fornecida pelo local de hospedagem 
        auth: { user, pass }
    });
});

transporter.sendEmail({
    from: user, //Qual conta esta sendo enviado o email.
    to: "", //Quem recebe o email.
    replayTo: "", //Email para quem esta preenchendo o formulario.
    subject: "", //Assunto do email.
    text: "", //Corpo do email.
}).then(info =>{
    res.send(info)
}).catch(error =>{
    res.send(error)
})

app.listen(port, () => console.log(`unning on port ${port}!`));