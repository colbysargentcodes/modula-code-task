var app = angular.module('atlantic-app', []);

app.controller('mainController', function ($scope) {
  $scope.activeSection = 'overview';
  
  $scope.atlanticData = {
    menuItems: [
      {
        name: 'What We Do',
        location: '#'
      },
      {
        name: 'Products',
        location: '#',
        items: [
          {
            name: 'Warranty & Indemnity',
            href: '#'
          },
          {
            name: 'Tax Risks',
            href: '#'
          },
          {
            name: 'Title & Real Estate Risks',
            href: '#'
          },
          {
            name: 'Contingent Risks',
            href: '#'
          }
        ]
      },
      {
        name: 'Our Team',
        location: '#'
      },
      {
        name: 'Contact',
        location: '#'
      }
    ],
    contacts: [
      {
        name: 'Nicholas Pullen',
        image: 'images/Nicholas-Pullen.jpg',
        numbers: [
          '+1 (917) 794-3058',
          '+1 (917) 617-0656'
        ],
        email: 'n.pullen@example.com'
      },
      {
        name: 'Nicholas Pullen',
        image: 'images/Nicholas-Pullen.jpg',
        numbers: [
          '+1 (917) 794-3058',
          '+1 (917) 617-0656'
        ],
        email: 'n.pullen@example.com'
      }
    ],
    downloads: [
      {
        name: 'Buyer-side policy',
        image: 'images/download1.jpg',
        location: 'images/download1.jpg'
      },
      {
        name: 'Seller-side policy',
        image: 'images/download2.jpg',
        location: 'images/download2.jpg'
      }
    ]
  };
});