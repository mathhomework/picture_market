var populateData = function(){
    var ref = new Firebase("https://piclistings.firebaseio.com");
    ref.set(
        [
            {
                id:42,
                name:'blue',
                price:'1.00',
                description: 'what more could you possibly want?',
                hex:'#6600ff',
                rgb:'0, 0, 255',
                patrons:'John'
            },
            {
                id:33,
                name:'red',
                price:'1.25',
                description: 'as red as a red square can be',
                hex:'#ff000',
                rgb:'255, 0, 0',
                patrons:'Tim'

            },
            {
                id:12,
                name:'green',
                price:'1.50',
                description: 'just like you',
                hex:'#15FF00',
                rgb:'0, 255, 0',
                patrons:''
            }
        ]
    );
};
