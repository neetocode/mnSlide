(function () {
    'use sctrict';
    angular.module("slideAngular", []);
    angular.module("slideAngular").controller("MainController", function ($timeout,MnSlide) {
        var mainCtrl = this;
        mainCtrl.array = [{
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

        
        mainCtrl.mnSlide = MnSlide.create(mainCtrl.array); 
        // window.tests.execute();
    });

    angular.module("slideAngular").service('MnSlide', function ($window, $timeout) {
        var service = {
            create: create
        };

        function create(lista,options){
            if(!lista) throw "Lista is undefined";
            if(!lista.constructor === Array) throw "Lista type error";
            var obj = {},options;
            obj.listaOrig = angular.copy(lista);
            obj.lista = angular.copy(lista);
            
            
            obj.lista.forEach(_createObjMnSlide);
            obj.lista.forEach(_organizeOrderStart);
            obj.lista.forEach(_organizePositions);

            obj.size = size;
            obj.next = next;
            obj.prev = prev;
            obj.remove = remove;
            obj.goTo = goTo;
            obj.restart = restart;
            obj.toString = toString;
            obj.getActual = getActual;
            obj.getIndexActual = getIndexActual;
            obj.isReversing = false;
            
            function goTo(index){
                if(index >= obj.lista.length || index < 0) return console.error("Index not exist");
                obj.isReversing = index < obj.getIndexActual();
                _organizeOrder(obj.lista,index);
                obj.lista.forEach(_organizePositions);
            }
            function size(){
                return obj.lista.length;
            }
            function next(){
                obj.lista.forEach(_nextList);
                obj.lista.forEach(_organizePositions);
                obj.isReversing = false;
            }
            function prev(){
                obj.lista.forEach(_prevList);
                obj.lista.forEach(_organizePositions);
                obj.isReversing = true;
            }

            function restart(){
                obj.lista = angular.copy(obj.listaOrig);
                obj.lista.forEach(_createObjMnSlide);
                obj.lista.forEach(_organizeOrderStart);
                obj.lista.forEach(_organizePositions);
            }

            function remove(indexRemove){
                if(isNaN(indexRemove)) return console.error("Invalid index");
                if(indexRemove >= obj.lista.length || indexRemove < 0) return console.error("Index not exist");
                
                var indexActual = obj.getIndexActual();
                var novoIndexActual;

                obj.lista.splice(indexRemove,1);
                
                if(indexRemove == indexActual){
                    novoIndexActual = indexActual - 1 < 0 ? obj.lista.length - 1: indexActual - 1;
                }else{
                    novoIndexActual = indexActual;
                }

                _organizeOrder(obj.lista,novoIndexActual);
                obj.lista.forEach(_organizePositions);

                obj.isReversing = indexActual < obj.getIndexActual();
            }

            function getIndexActual(){
                var index;
                obj.lista.some(function(item,i){
                    if(item._mnSlide.actual){ 
                        index = i
                        return true;
                    }
                });
                return index;
            }
            function getActual(){
                var actual;
                obj.lista.some(function(item){
                    if(item._mnSlide.actual){ 
                        actual = item
                        return true;
                    }
                });
                return actual;
            }

            function toString(){
                var str = "";
                obj.lista.forEach(function(item) {
                    str += "Order: "+item._mnSlide.order+" | Position: ";
                    if(item._mnSlide.before) str += "before\n"
                    if(item._mnSlide.actual) str += "actual\n"
                    if(item._mnSlide.after) str += "after\n"
                });
                return str;
            }
            
            return obj;
        }

        function _prevList(item,index,array){
            var mnSlide = item._mnSlide;
            mnSlide.order = (mnSlide.order+1) % array.length;
        }

        function _nextList(item,index,array){
            var mnSlide = item._mnSlide;
            var newOrder = mnSlide.order-1;
            mnSlide.order = newOrder < 0 ? array.length-1 : newOrder;
        }
        

        function _createObjMnSlide(item,index){
            if(item._mnSlide) delete item._mnSlide;
            item._mnSlide = {
                order: null,
                before: false,
                actual: false,
                after: false
            };
        }

        function _organizeOrderStart(item,index){
            item._mnSlide.order = index;
        }

        function _organizeOrder(lista,actualIndex){
            var index = actualIndex == 0 ? 0 : (actualIndex - lista.length)*-1;
            lista.forEach(function(item,i,arr){
                item._mnSlide.order = index;
                index = index == (arr.length - 1) ? 0 : index+1;
            });
        }

        function _organizePositions(item,index,array){
            var mnSlide = item._mnSlide;
            mnSlide.actual = mnSlide.before = mnSlide.after = false;
            if(mnSlide.order == 0)
            mnSlide.actual = true;
            else if(mnSlide.order == array.length - 1)
            mnSlide.before = true;
            else if(array[(index-1 < 0 ? array.length - 1:index-1)]._mnSlide.order == 0)
            mnSlide.after = true;
        }

        // window.tests.create = create;
        

        return service;

        
        
    });
})();