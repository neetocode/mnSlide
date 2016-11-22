'use sctrict';
window.tests = {};
var arrayTest = [
    {
            nome: 'miguel',
            idade: 15,
            img: 'http://placehold.it/200x200'
        }, {
            nome: 'goes',
            idade: 21,
            img: 'http://placehold.it/200x200'
        }
        , {
            nome: 'de',
            idade: 32,
            img: 'http://placehold.it/200x200'
        }, {
            nome: 'souza',
            idade: 32,
            img: 'http://placehold.it/200x200'
        }, {
            nome: 'neto',
            idade: 32,
            img: 'http://placehold.it/200x200'
        }, {
            nome: 'fim',
            idade: 32,
            img: 'http://placehold.it/200x200'
        }
        ];


var check6 = {
    _nextList0 : function(){
        mnSlide.restart();
        var lista = mnSlide.lista;
        
        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        if(lista[2]._mnSlide.order != 2) console.error("Error");
        if(lista[3]._mnSlide.order != 3) console.error("Error");
        if(lista[4]._mnSlide.order != 4) console.error("Error");
        if(lista[5]._mnSlide.order != 5) console.error("Error");

        if(!lista[0]._mnSlide.actual) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.before) console.error("Error");

        console.log("Finish _nextList0");
    },
    _nextList1 : function(){
        mnSlide.restart();
        mnSlide.next();
        var lista = mnSlide.lista;
        
        if(lista[0]._mnSlide.order != 5) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");
        if(lista[2]._mnSlide.order != 1) console.error("Error");
        if(lista[3]._mnSlide.order != 2) console.error("Error");
        if(lista[4]._mnSlide.order != 3) console.error("Error");
        if(lista[5]._mnSlide.order != 4) console.error("Error");

        if(!lista[0]._mnSlide.before) console.error("Error");
        if(!lista[1]._mnSlide.actual) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");


        console.log("Finish _nextList1");
    },
    _nextList2 : function(){
        mnSlide.restart();
        mnSlide.next();
        var lista = mnSlide.lista;
        mnSlide.remove(5);        

        if(lista[0]._mnSlide.order != 4) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");
        if(lista[2]._mnSlide.order != 1) console.error("Error");
        if(lista[3]._mnSlide.order != 2) console.error("Error");
        if(lista[4]._mnSlide.order != 3) console.error("Error");

        if(!lista[0]._mnSlide.before) console.error("Error");
        if(!lista[1]._mnSlide.actual) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");


        console.log("Finish _nextList2");
    },
    _prevList1 : function(){
        mnSlide.restart();
        mnSlide.prev();
        var lista = mnSlide.lista;

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 2) console.error("Error");
        if(lista[2]._mnSlide.order != 3) console.error("Error");
        if(lista[3]._mnSlide.order != 4) console.error("Error");
        if(lista[4]._mnSlide.order != 5) console.error("Error");
        if(lista[5]._mnSlide.order != 0) console.error("Error");

        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.before) console.error("Error");
        if(!lista[5]._mnSlide.actual) console.error("Error");
        
        console.log("Finish _prevList");
    },
    _prevList4 : function(){
        mnSlide.restart();
        var lista = mnSlide.lista;

        mnSlide.prev();
        
        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 2) console.error("Error");
        if(lista[2]._mnSlide.order != 3) console.error("Error");
        if(lista[3]._mnSlide.order != 4) console.error("Error");
        if(lista[4]._mnSlide.order != 5) console.error("Error");
        if(lista[5]._mnSlide.order != 0) console.error("Error");
        
        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.before) console.error("Error");
        if(!lista[5]._mnSlide.actual) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 2) console.error("Error");
        if(lista[1]._mnSlide.order != 3) console.error("Error");
        if(lista[2]._mnSlide.order != 4) console.error("Error");
        if(lista[3]._mnSlide.order != 5) console.error("Error");
        if(lista[4]._mnSlide.order != 0) console.error("Error");
        if(lista[5]._mnSlide.order != 1) console.error("Error");
        
        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.before) console.error("Error");
        if(!lista[4]._mnSlide.actual) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 3) console.error("Error");
        if(lista[1]._mnSlide.order != 4) console.error("Error");
        if(lista[2]._mnSlide.order != 5) console.error("Error");
        if(lista[3]._mnSlide.order != 0) console.error("Error");
        if(lista[4]._mnSlide.order != 1) console.error("Error");
        if(lista[5]._mnSlide.order != 2) console.error("Error");
        
        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.before) console.error("Error");
        if(!lista[3]._mnSlide.actual) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 4) console.error("Error");
        if(lista[1]._mnSlide.order != 5) console.error("Error");
        if(lista[2]._mnSlide.order != 0) console.error("Error");
        if(lista[3]._mnSlide.order != 1) console.error("Error");
        if(lista[4]._mnSlide.order != 2) console.error("Error");
        if(lista[5]._mnSlide.order != 3) console.error("Error");
        
        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.before) console.error("Error");
        if(!lista[2]._mnSlide.actual) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 5) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");
        if(lista[2]._mnSlide.order != 1) console.error("Error");
        if(lista[3]._mnSlide.order != 2) console.error("Error");
        if(lista[4]._mnSlide.order != 3) console.error("Error");
        if(lista[5]._mnSlide.order != 4) console.error("Error");
        
        if(!lista[0]._mnSlide.before) console.error("Error");
        if(!lista[1]._mnSlide.actual) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        if(lista[2]._mnSlide.order != 2) console.error("Error");
        if(lista[3]._mnSlide.order != 3) console.error("Error");
        if(lista[4]._mnSlide.order != 4) console.error("Error");
        if(lista[5]._mnSlide.order != 5) console.error("Error");
        
        if(!lista[0]._mnSlide.actual) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.before) console.error("Error");

        mnSlide.prev();

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 2) console.error("Error");
        if(lista[2]._mnSlide.order != 3) console.error("Error");
        if(lista[3]._mnSlide.order != 4) console.error("Error");
        if(lista[4]._mnSlide.order != 5) console.error("Error");
        if(lista[5]._mnSlide.order != 0) console.error("Error");
        
        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.before) console.error("Error");
        if(!lista[5]._mnSlide.actual) console.error("Error");

        console.log("Finish _prevList4");
    },
    _remove:function(){
        mnSlide.restart();

        mnSlide.remove(0);
        
        var lista = mnSlide.lista;
        
        if(mnSlide.size() != 5) console.error("Error");

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 2) console.error("Error");
        if(lista[2]._mnSlide.order != 3) console.error("Error");
        if(lista[3]._mnSlide.order != 4) console.error("Error");
        if(lista[4]._mnSlide.order != 0) console.error("Error");

        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.before) console.error("Error");
        if(!lista[4]._mnSlide.actual) console.error("Error");


        console.log("Finish _remove");
    },
    _remove2:function(){
        mnSlide.restart();

        mnSlide.remove(4);
        
        var lista = mnSlide.lista;
        
        if(mnSlide.size() != 5) console.error("Error");

        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        if(lista[2]._mnSlide.order != 2) console.error("Error");
        if(lista[3]._mnSlide.order != 3) console.error("Error");
        if(lista[4]._mnSlide.order != 4) console.error("Error");

        if(!lista[0]._mnSlide.actual) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.before) console.error("Error");


        console.log("Finish _remove2");
    },
     _goTo:function(){
        mnSlide.restart();

        mnSlide.goTo(4);
        var indexActual = mnSlide.getIndexActual();
        var elemActual = mnSlide.getActual();

        var lista = mnSlide.lista;
        
        if(mnSlide.size() != 6) console.error("Error");
        if(indexActual != 4) console.error("Error");
        if(elemActual.nome != 'neto') console.error("Error");

        if(lista[0]._mnSlide.order != 2) console.error("Error");
        if(lista[1]._mnSlide.order != 3) console.error("Error");
        if(lista[2]._mnSlide.order != 4) console.error("Error");
        if(lista[3]._mnSlide.order != 5) console.error("Error");
        if(lista[4]._mnSlide.order != 0) console.error("Error");
        if(lista[5]._mnSlide.order != 1) console.error("Error");

        if(!lista[0]._mnSlide.after) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.before) console.error("Error");
        if(!lista[4]._mnSlide.actual) console.error("Error");
        if(!lista[5]._mnSlide.after) console.error("Error");


        console.log("Finish _goTo");
    },
    _goTo2:function(){
        mnSlide.restart();

        mnSlide.goTo(0);
        
        var lista = mnSlide.lista;
        
        if(mnSlide.size() != 6) console.error("Error");

        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        if(lista[2]._mnSlide.order != 2) console.error("Error");
        if(lista[3]._mnSlide.order != 3) console.error("Error");
        if(lista[4]._mnSlide.order != 4) console.error("Error");
        if(lista[5]._mnSlide.order != 5) console.error("Error");

        if(!lista[0]._mnSlide.actual) console.error("Error");
        if(!lista[1]._mnSlide.after) console.error("Error");
        if(!lista[2]._mnSlide.after) console.error("Error");
        if(!lista[3]._mnSlide.after) console.error("Error");
        if(!lista[4]._mnSlide.after) console.error("Error");
        if(!lista[5]._mnSlide.before) console.error("Error");


        console.log("Finish _goTo2");
    }
}

var check2 = {
    _nextList : function(){
        var lista = angular.copy(arrayTest);
        lista.forEach(window.tests._nextList);

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");
        
        console.log("Finish _nextList");
    },
    _nextList2 : function(){
        var lista = angular.copy(arrayTest);

        lista.splice(1,1);
        lista.forEach(window.tests._organizeOrderStarted);
        lista.forEach(window.tests._nextList);
        
        
        if(lista[0]._mnSlide.order != 0) console.error("Error");

        console.log("Finish _nextList2");
    },
    _prevList1 : function(){
        var lista = angular.copy(arrayTest);
        lista.forEach(window.tests._prevList);

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");

        console.log("Finish _prevList");
    },
    _prevList2 : function(){
        var lista = angular.copy(arrayTest);

        lista.splice(1,1);
        lista.forEach(window.tests._organizeOrderStarted);
        lista.forEach(window.tests._prevList);
        
        
        if(lista[0]._mnSlide.order != 0) console.error("Error");

        console.log("Finish _prevList2");
    },
    _prevList3 : function(){
        var lista = angular.copy(arrayTest);

        lista.forEach(window.tests._prevList);
        

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");

         lista.forEach(window.tests._prevList);
        
        
        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        
        console.log("Finish _prevList3");
    },
    _prevList4 : function(){
        var lista = angular.copy(arrayTest);

        lista.forEach(window.tests._prevList);
        
        
        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");

        lista.forEach(window.tests._prevList);
        
        
        if(lista[0]._mnSlide.order != 0) console.error("Error");
        if(lista[1]._mnSlide.order != 1) console.error("Error");
        
        lista.forEach(window.tests._nextList);

        if(lista[0]._mnSlide.order != 1) console.error("Error");
        if(lista[1]._mnSlide.order != 0) console.error("Error");

        console.log("Finish _prevList4");
    }
}


window.tests.execute = function(){
    mnSlide =  window.tests.create(arrayTest);
    

    check6._nextList0();
    check6._nextList1();
    check6._nextList2();

    check6._prevList1();
    check6._prevList4();

    // check2._nextList();
    // check2._nextList2();

    // check2._prevList();
    // check2._prevList2();
    // check2._prevList3();
    // check2._prevList4();

    check6._remove();
    check6._remove2();
    check6._goTo();
    check6._goTo2();


}
