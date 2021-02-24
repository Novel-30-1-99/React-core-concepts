fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => showUserName(data));

        function showUserName(data){
            let userInfo = '';
            data.forEach(users => {
                userInfo = userInfo + ` <div class = "user">
                    <h2>Name: ${users.name} </h2>
                    <p>Email: ${users.email}</p>
                    <p> Company: ${users.company.name}<br> ${users.company.catchPhrase},<br> ${users.company.bs}</p>
                    </div> `
            });
            const displayUser = document.getElementById("user-container");
            displayUser.innerHTML = userInfo;
        }



        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res => res.json())
        // .then(data =>showUserName(data));

        // function showUserName(data){
        //     let list = '';
        //     data.forEach(user =>{
        //         list = list + `<li> ${user.name} : ${user.email} </li>`
        //     });
        //     const ul = document.getElementById("user-container");
        //     ul.innerHTML=list;
        // }