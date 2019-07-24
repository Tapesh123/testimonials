(function(){ 
    //customers 
    let customers = [];
    
    let index = 0;

    //creating a object constrcutor function, creating instance of an object 
    function Customer (name, img, text) { 
        this.name = name;
        this.img = img;
        this.text = text;
    }
  //create a customer function
  function createCustomer(name, img, text) { 
      // full img
      let fullImg = `img/customer-${img}.jpg`;
    
      // create a new customer instance 
      const customer = new Customer(name, fullImg, text);

      // add to all customers, pass three parameters.  
      customers.push(customer);
    
  }
  createCustomer('John', 1, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  createCustomer('Pete', 2, `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`)

  createCustomer('Adam', 3, `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`)

//console.log(customers);
//decide the event listeners to buttons
  document.querySelectorAll('.btn').forEach(function(item) { 
    item.addEventListener('click', function(event){ 
        event.preventDefault();
     
        //if statement to check whether parent element contains the class either previous button or next button 
        if (event.target.parentElement.classList.contains('prevBtn')) {
            if (index === 0) { 
                index = customers.length;

            }
            index--;
            document.getElementById('customer-img').src = customers[index].img;
            document.getElementById('customer-name').textContent = customers[index].name;
            document.getElementById('customer-text').textContent = customers[index].text;

        }

        //next button
            if (event.target.parentElement.classList.contains('nextBtn')) {
                if (index === (customers.length-1)) {
                    index = customers.length;
                    index = -1;
                }
                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }
    })
  })


})();
 