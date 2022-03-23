function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercício 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const listaDias = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let novoDia = document.createElement('li');
    novoDia.innerText = dezDaysList[index];
    novoDia.className = 'day';
    //check if it's a holiday
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      novoDia.classList.add('holiday');
    }
    //checks if it's friday
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
      novoDia.classList.add('friday');
    }
    listaDias.appendChild(novoDia);
  }

//Exercicio 2
  function holidayButton(name) {
    let novoBotao = document.createElement('button');
    novoBotao.id = 'btn-holiday';
    novoBotao.innerText = name;
    let listaDivs = document.getElementsByTagName('div');
    let divCerta = listaDivs[0];
    for(let index = 0; index < listaDivs.length; index += 1) {
      if (listaDivs[index].className === 'buttons-container') {
        divCerta = listaDivs[index];
      }
    }
    divCerta.appendChild(novoBotao);
  }

  holidayButton('Feriados');

  //Exercício 3

  function eventoColorirFeriados () {
    let listaFeriados = document.getElementsByClassName('holiday');
    if (listaFeriados[0].style.backgroundColor === 'red') {
      for (let index = 0; index < listaFeriados.length; index += 1) {
        listaFeriados[index].style.backgroundColor = 'rgb(238,238,238)';
     }
    } else {
      for (let index = 0; index < listaFeriados.length; index += 1) {
        listaFeriados[index].style.backgroundColor = 'red';
     }
    }
  }

  function eventoColorirSextas () {
    let listaSextas = document.getElementsByClassName('friday');
    if (listaSextas[0].style.backgroundColor === 'blue') {
      for (let index = 0; index < listaSextas.length; index += 1) {
        listaSextas[index].style.backgroundColor = 'rgb(238,238,238)';
     }
    } else {
      for (let index = 0; index < listaSextas.length; index += 1) {
        listaSextas[index].style.backgroundColor = 'blue';
     }
    }
  }

  function adicionaEvento (elemento, evento, funcao) {
    elemento.addEventListener(evento, funcao);
  }

  adicionaEvento(document.getElementById('btn-holiday'), 'click', eventoColorirFeriados);



  //Exercício 4
  function fridayButton(name) {
    let novoBotao = document.createElement('button');
    novoBotao.id = 'btn-friday';
    novoBotao.innerText = name;
    let listaDivs = document.getElementsByTagName('div');
    let divCerta = listaDivs[0];
    for(let index = 0; index < listaDivs.length; index += 1) {
      if (listaDivs[index].className === 'buttons-container') {
        divCerta = listaDivs[index];
      }
    }
    divCerta.appendChild(novoBotao);
  }

  fridayButton('Sexta-feira');


  //Exercício 5 - feito junto com o 3
  adicionaEvento(document.getElementById('btn-friday'), 'click', eventoColorirSextas);

  //Exercício 6
  const listaDays = document.getElementsByClassName('day');

  function aumentarLetra(event){
    event.target.style.fontSize = '40px';
  }

  function diminuirLetra(event){
    event.target.style.fontSize = '20px';
  }

  for(let index = 0; index < listaDays.length; index += 1) {
    listaDays[index].addEventListener('mouseover', aumentarLetra);
    listaDays[index].addEventListener('mouseleave', diminuirLetra);
  }

  //Exercício 7

  function adicionarNovaTarefa(tarefa) {
    let novaTarefa = document.createElement('span');
    novaTarefa.innerText = tarefa;
    let listaDivs = document.getElementsByTagName('div');
    let divCerta = listaDivs[0];
    for(let index = 0; index < listaDivs.length; index += 1) {
      if (listaDivs[index].className === 'my-tasks') {
        divCerta = listaDivs[index];
      }
    }
    divCerta.appendChild(novaTarefa);
  }

  adicionarNovaTarefa('cozinhar');

  //Exercício 8
  
  function colorirTarefa(cor) {
    let divColorida = document.createElement('div');
    divColorida.style.backgroundColor = cor;
    let listaDivs = document.getElementsByTagName('div');
    let divCerta = listaDivs[0];
    for(let index = 0; index < listaDivs.length; index += 1) {
      if (listaDivs[index].className === 'my-tasks') {
        divCerta = listaDivs[index];
      }
    }
    divCerta.appendChild(divColorida);
  }

  colorirTarefa('blue');

  //Exercício 9

  function selecionaTarefa(event){
      event.target.classList.add('task-selected');
  }

  function adicionaEventoTarefa(elemento, evento, funcao) {
    elemento.addEventListener(evento, funcao);
  }

  adicionaEventoTarefa(document.getElementsByClassName('task')[0], 'click', selecionaTarefa);

  //Exercício 10

  function eventoColorirDia (event) {
    if (event.target.backgroundColor === document.getElementsByClassName()[0].backgroundColor) {
      event.target.backgroundColor = 'rgb(119,119,119)';
    } else {
      event.target.backgroundColor = document.getElementsByClassName()[0].backgroundColor;
    }
  }

  for(let index = 0; index < listaDays.length; index += 1) {
    listaDays[index].addEventListener('click', eventoColorirDia);
  }
  
