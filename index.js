async function searchmeal() {
  // define the row variable as empty
  let row ='';

  // get take reference of tbody by id
  let tabtbody = document.getElementById("tbody");
   // get take reference of mealdetail container by id
  let mealview = document.getElementById("mealdetail");
  // set tbody empty
  tabtbody.innerHTML = '';
   
  // search meal value
  let meal = document.getElementById("mealname").value;

  // check meal value is empty and show the alert msg
  if (meal == "") {
    alert("Please search the meal");
  } else {
    // call the meal api using fetch function this return promiss using await to get output
    let response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal + ""
    );
    var result = await response.json();

    // by default meal view container is hide after searching the meal view container is visiable
    mealview.classList.remove("display-none");

    // add dynamically row inside the tbody
    result.meals.forEach(function1);
    function function1(result, index) {
      row = `
         <tr>
           <td>${index+1}</td>
            <td>${result.strMeal}</td>
            <td><img src="${result.strMealThumb}" width="100px"/></td>
            <td>${result.strArea}</td>
            <td>${result.strCategory}</td>
            <td><button class="btn btn-danger" > <i class="fa fa-heart" aria-hidden="true"></i>
            Add to Favorites</button></td>
          </tr>
            `;
      tabtbody.innerHTML+=row;
    }
  }
}
