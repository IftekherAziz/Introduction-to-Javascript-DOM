console.log("Hello World");
console.log(document.body);

 const studnet = {
            name: 'John',
            age: 20,
            study: function(time){
                console.log(time, 'Studying');
            }
        };
        console.log('Adding a new element');

        const liCollections = document.getElementsByTagName('li');
        console.log(liCollections);
        for (const li of liCollections) {
            li.style.color = 'green';
            console.log(li);
        }

