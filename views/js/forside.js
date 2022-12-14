    const url = 'http://localhost:3000/products'
    let apiData;
    console.log(process.env.PORT)
    
    fetch(url)
        .then(response => {
            return response.json();
            //parsing our data
        })
        .then(data => {
            apiData = data
            //Our parsed data
        })
        .catch(error => {
            console.log(error);
            //On error
        })
        .finally(() => {
            console.log(apiData);
            for (let index = 0; index < 9; index++) {
                const element = apiData[index];
                document.querySelector('#products').innerHTML += 
                `<article style="background-image: url('${element.image}')">
                <h2>${element.title}</h2>
                <p>${element.prize} DKK</p>
            </article>`
            }


            //When all is set and done
        })            
        function NewCat(obj) {
            document.querySelector('#products').innerHTML = ""
                for (let index = 0; index < apiData.length; index++) {
                    const element = apiData[index];
                    if (element.category === obj.innerText) {
                       document.querySelector('#products').innerHTML += 
                    `<article style="background-image: url('${element.image}')">
                    <h2>${element.title}</h2>
                    <p>${element.prize} DKK</p>
                </article>` 
                    }
                    
                }
            }