(function() {
 'use strict';

   angular.module('appUsers',[])
   .filter('lowerThan',function(){
             var maxage = 18;
             // input le tableau, max le checkbox
             return function(input,max) {
               // si checkbox = true
               if(max == true){

                 var tableauAffiche = [];
                 console.log(tableauAffiche);
                 input.forEach(function(user){
                   if(user.age >= maxage){
                     tableauAffiche.push(user);
                   }
                 });

                 return tableauAffiche;

               }else {

                 return input;
               }

               }
             })
  .filter('filtreVille',function(){

              // input le tableau, max le checkbox
          return function(input,maxdeux) {

              // si input = true
          if(maxdeux == true){

          var tableauAffiche = [];
          console.log(tableauAffiche);
          input.forEach(function(user){
          if(user.ville === 'Paris' || 'Lyon' || 'Marseille'){
          tableauAffiche.push(user);
        }
    });

      return tableauAffiche;

      }else {

          return input;
      }

    }
  })
           .controller('UsersCtrl',UsersCtrl);



           function UsersCtrl($scope, $filter){
             console.log('scope chargée');

             $scope.users = [

                 {
                   nom: 'Michel',
                   prenom:'Cédric',
                   age: 34,
                   ville:'Saint-Priest',
                   sexe:true,
                   img:'http://www.quizz.biz/uploads/quizz/83417/4_6mWX9.jpg'
                 },
                 {
                   nom: 'Desmoort',
                   prenom:'Caroline',
                   age: 37,
                   ville:'Saint-Priest',
                   sexe:false,
                   img:''
                 },
                 {
                   nom: 'Michel',
                   prenom:'Alain',
                   age:62,
                   ville:'Privas',
                   sexe:true,
                   img:'https://pbs.twimg.com/profile_images/542249616293376001/wrXuRjx_.jpeg'
                 },
                 {
                   nom: 'Michel',
                   prenom:'Hanaé',
                   age:8,
                   ville:'Saint-Priest',
                   sexe:false,
                   img:''
                 }


             ];


          //  var orderBy = $filter('orderBy');
            //$scope.selectage = orderBy($scope.users, 'age');



             $scope.ajouterUser = function(){
               console.log('formulaire envoyé');
               $scope.users.push(
               {
                   nom:$scope.nom,
                   prenom:$scope.prenom,
                   sexe:$scope.sexe,
                   age:$scope.age,
                   ville:$scope.ville,
                   img:$scope.img,

               });
               $scope.nom = '';
               $scope.prenom = '';
               $scope.sexe = '';
               $scope.age = '';
               $scope.ville = '';
               $scope.img ='';

             }

            // Créer un bouton par utilisateur pour pouvoir supprimer
            // * un utilisateur
             $scope.suppr = function(user){
                 console.log(user);
                var position = $scope.users.indexOf(user);
                console.log(position);
                 $scope.users.splice(position,1);
                }


//+ Ajouter une checkbox pour voir apparaitre que les utilisateurs majeur quand elle est cochés



          $scope.changement = function(){
                         console.log($scope.age);
                         if($scope.age == "age"){
                           $scope.users = $filter('orderBy')($scope.users, 'age', false);

                         }else{
                           $scope.users = $filter('orderBy')($scope.users, 'age', true);
                         }
                       };

          $scope.majorite = function(user){

            if($scope.age == "age"){
              $scope.users = $filter('lowerThan')($scope.users, 'age', false);

            }else{
              $scope.users = $filter('lowerThan')($scope.users, 'age', true);
            }
          };




           }


/**
* Exercice 2
*/

/*
*
* Exercice:
*
*

* + Ajouter un Avatar (url d'image) par utilisateur lors de l'affichage des utilisateurs
et de la création d'utilisateur (ng-src). Valider par un blur que la photo soit gif
*
* + Créer une liste déroulante perùetant de trier par age avec 2 options:
   - Le plus Jeune
   - Le plus Vieux

  AU changement d'item selectionné, cela me trie le tableau du plus jeune au plus vieux OU
          du plus vieux au plus jeune

 + Ajouter une checkbox pour voir apparaitre que les utilisateurs majeur quand elle est cochés

 + Ajouter 3 bouttons radios Paris - Lyon  - Marseille pour filtrer les utilisateurs par ville
 et un boutton "Toutes les villes" pour voir tout les utilisateurs

 + Ajouter par utilisateur un tableaux de Sports (au choix: Foot, Basket Baseball,Rugby, Handball )
   PuisCréer


 + Ajouter 10 utilisateurs dans votre liste d'utilisateurs puis
     créer un input range (ou range slider en jquery/angular)
   pour limiter le nombre d'utilisateurs

 + Ajouter les coordonées ongitude et latitude dans un objet "coords" PAR utilisateurs
   et placer les utilisateurs sur une Google Map tuto: https://openclassrooms.com/courses/google-maps-javascript-api-v3
   ou module en AngularJS


   Bonus: Décliner le meme exercice mais en chargeant l'API de JsonPlaceholder
   sous l'url: https://jsonplaceholder.typicode.com/users
   Pour cela, voir comment utliser l'objet $http



 NB: ****Breaking News**** VOUS POUVEZ UTILISER LA LIBRAIRIES JS "LODASH" pour toutes vos traitementd e tableaux , objets...*/



 /*********************************************************************************************/







}());
