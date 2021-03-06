

//IIFE


(function(){

"use strict";

console.log("Angular...");
//angular.module()permet d'initialisé une app coté JS
// [] qui permettra d'ajouter d'autres module en dépendance
angular.module('myApp',[])
        //permet de créer un controlleur dans une app
       .controller('myController', myController);

//fonction de mon controlleur
//1 controlleur = 1 fonction
//$scope est l'objet definissant la scope de mon controlleur
function myController($scope){

// this c'est un objet qui représente mon controlleur

    $scope.nom ='Michel';
    $scope.prenom ='Cedric';
    $scope.salaire = 0;
    $scope.trump = 'Trump';
    $scope.taxe = 0;
    $scope.salaireEnFranc = 0;
    $scope.impot = 0;

    $scope.modifierPrenom = function(){
      $scope.prenom = 'Pierre';
    }
  /*  + Ajouter le champs input text Salaire
         Si le Salaire est supérieur à 1 000 000€ et que le nom est Trump
         + Afficher "Je suis président" dans une alert boostrapp
         + Créer un boutton "Voir le détail" pour afficher le nom, le prénom et le salaire dans une div Jumbotron
         + Créer un bouton "Reformatter" qui permet au clique de formatter
          - le Nom avec la premiere lettre en majuscule
          - le Prénom avec la premiere lettre en majuscule
          et les espaces remplacés par des tirets
          - Le Salaire formatter en € avec des espaces et virgules

         + A l'évenement blug (ng-blur) si le prénom est égal au nom,
         afficher "Attention votre nom doit etre différent du prénom"

         + A l'évenement keyup (ng-keyup) du salaire, changer la couleur du champs salaire par 3 classes CSS
         avec l'instruction "ng-class"
          - salaire petit: color red
                - salaire moyen: color orange
                      - salaire grand: color vert
                            - salaire énorme: color gold*/

    $scope.seeDetail = false;
$scope.afficherRens = function(){

  $scope.seeDetail = !$scope.seeDetail;
}

  console.log();


$scope.formattage = function(){
  $scope.nom = $scope.nom[0].toUpperCase() +  $scope.nom.slice(1).toLowerCase();

    $scope.prenom = $scope.prenom[0].toUpperCase() +  $scope.prenom.slice(1).toLowerCase().replace(' ','-');

    $scope.salaire = Intl.NumberFormat().format($scope.salaire) + ' €';
}

$scope.classBase = "alert-primary";

$scope.changeClass = function(){
console.log('coucou');
if ($scope.salaire > 1000000) {
 $scope.classBase = "alert-info";
} else if ($scope.salaire < 1000) {
 $scope.classBase = "alert-danger";
} else if ($scope.salaire > 1000 && $scope.salaire < 2000) {
  $scope.classBase = "alert-warning";
} else if ($scope.salaire > 2000 && $scope.salaire < 10000) {
  $scope.classBase = "alert-success";
}
}


$scope.pourcentage = function(){

     $scope.salaire = $scope.salaire - ($scope.salaire * $scope.impot/100)
}
$scope.franc= function(){

$scope.salaire = $scope.salaire * 6.55957;
}

}


}());
