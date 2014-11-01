var populateData = function(){
    console.log('populating');
    var ref = new Firebase("https://piclistings.firebaseio.com");
    ref.set({

            blue: {
                id: 1,
                name: 'blue',
                price: '1.00',
                description: 'what more could you possibly want?',
                hex: '#6600ff',
                rgb: '0, 0, 255',
                patrons: 'John'
            },
            red: {
                id: 2,
                name: 'red',
                price: '1.25',
                description: 'as red as a red square can be',
                hex: '#ff0000',
                rgb: '255, 0, 0',
                patrons: 'Tim'

            },
            green: {
                id: 3,
                name: 'green',
                price: '1.50',
                description: 'just like you',
                hex: '#15FF00',
                rgb: '0, 255, 0',
                patrons: ''
            },
            orange:{
                id: 4,
                name:'orange',
                price: '1.50',
                description: 'just like you',
                hex: '#FF8000',
                rgb: '255, 128, 0',
                patrons: ''
            },
            dark_purple:{
                id: 5,
                name:'dark purple',
                price: '1.50',
                description: 'royal',
                hex: '#551A8B',
                rgb: '85, 26, 139',
                patrons: ''
            },
            yellow:{
                id:6,
                name:'yellow',
                price:'0',
                description:'best color',
                hex: '#FFFF00',
                rgb: '255,255,0',
                patrons:''
            },
            peach:{
                id:7,
                name:'peach',
                price:'2.50',
                description:'yummy',
                hex: '#FFDAB9',
                rgb: '255,218,185',
                patrons:''
            }

        }
    );
};
