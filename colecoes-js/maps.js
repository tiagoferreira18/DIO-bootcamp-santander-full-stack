// Atividade Map 

/* Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1 Crie uma função getAdmins que recebe um Map;

2 Crie um Map e popule-o com nomes de usuários e seus papeis no sistema(EX: 'Luiz' => 'Admim');

3 Dentro de getAdmins, utilize o loop for...of para retornar uma lista com nomes dos usuários que são administradores.

*/

function getAdmins(map){
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Tiago', 'Admin');

console.log(getAdmins(usuarios));