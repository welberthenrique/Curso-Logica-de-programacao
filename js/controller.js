/*
 - Codigo do curso de lógica: 04/09/2021
 - Programador: Welbert Araujo
*/

var botao = document.getElementById("calcular");
botao.addEventListener('click', function(){
    var paciente = lerPaciente();
    mostraPaciente(paciente);
});


//objeto paciente dados relacionados a mesma entidade
// var paciente = {
//     nome = 'Renato Oliveira',
//     peso = 76.00,
//     altura = 1.78
// };

// mostraPaciente(paciente);