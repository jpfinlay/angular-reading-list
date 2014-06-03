(function(){

  'use strict';


  // Declare app level module which depends on filters, and services
  angular.module('readingList', [])

  .controller('ReadingListController', function(){
  	this.books = books;
  	this.genres = genres;
  });

    var genres = [
      'business', 'computing', 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humour', 
      'legend', 'mystery', 'mythology', 'non-fiction', 'poetry', 'self-help', 'sport'
    ];

    var books = [
      {
        title: 'ng-book - The Complete Book on AngularJS',
        author: 'Ari Lerner',
        isbn: '099134460X',
        review: 'Having spent many hours scouring forums and blogs in an attempt to break into the world of AngularJs, it\'s nice to finally have all the basic information here in one big book.',
        rating: 4,
        genres: {'non-fiction': true, computing: true} 
      },
      {
        title: 'Cycling Science: How Rider and Machine Work Together',
        author: 'Max Glaskin',
        isbn: '0711233594',
        review: 'Rather than sucking the joy out of cycling with the appliance of complex science, this fascinating read instead brings a very accessible new perspective through easy-to-understand language and plenty of images.',
        rating: 4,
        genres: {'non-fiction': true, sport: true} 
      },
      {
        title: 'Think and Grow Rich: The Original Classic',
        author: 'Tom Butler–Bowdon',
        isbn: '1906465592',
        review: 'Think and Grow Rich reveals the money-making secrets of hundreds of America\'s most affluent people. By thinking like them, you can become like them. Napoleon Hill\'s thirteen step programme will set you on the path to wealth and success.',
        rating: 5,
        genres: {'non-fiction': true, 'self-help': true, business: true} 
      },
      {
        title: '23 Things They Don\'t Tell You About Capitalism',
        author: 'Ha-Joon Chang',
        isbn: '0141047976',
        review: 'A masterful debunking of some of the myths of capitalism ... Witty, iconoclastic and uncommonly commonsensical ... this book will be invaluable.',
        rating: 4,
        genres: {'non-fiction': true, business: true} 
      }
    ];


})();