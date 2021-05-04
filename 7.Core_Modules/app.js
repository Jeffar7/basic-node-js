// Core Modudle
// File System
'use strict'
const fs = require('fs');
// const { rejects } = require('node:assert');
// const { resolve } = require('node:path');

// Menulis file secara (synchronous)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello World secara Synch!');
// }catch(e){
//     console.log(e);
// }

// Menulis string ke file (asynch) non-blocking
// fs.writeFile('data/test.txt', 'asynch text', (err) =>{
//     console.log(err);
// })

// Membaca isi file (synch)
// console.log(fs.readFileSync('data/test.txt','utf-8'));

// Membaca isi file (asynch)
// fs.readFile('data/test.txt','utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Siapa nama anda:' , (nama) => {
    rl.question('Masukan Umur' , (umur) => {
        console.log(`Your Name, ${nama}, ${umur}`);
        rl.close();
    })
});

// const question1 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('Whats your name: ', (answer) => {
//             console.log(`your name is: ${answer}`)
//             resolve()
//         })
//     })
// }

// const question2 = () => {
//     return new Promise((resolve, rejects) => {
//         rl.question('How old are you: ', (answer) => {
//             console.log(`Your age is: ${answer}`)
//             resolve()
//         })
//     })
// }

// const main = async () => {
//     await question1()
//     await question2()
//     rl.close()
// }

// main()