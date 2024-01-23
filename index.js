/**
 * Search meal functionilty
 */
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
            <td><a href='#' onclick="viewDetails(${result.idMeal})">${result.strMeal}</a></td>
            <td><button class="btn btn-danger" onclick="addtofavlist(${result.idMeal})"> <i class="fa fa-heart" aria-hidden="true"></i>
            Add to Favorites</button></td>
          </tr>
            `;
      tabtbody.innerHTML+=row;
    }
  }
}

/**
 * Function to meal to fav list
 * @param int mealid 
 */
function addtofavlist(mealid){
    const data = [];
    data.push({ mealid });
  
    // Get the existing meal IDs from localStorage
    let mealIDs = JSON.parse(localStorage.getItem("mealIDs")) || [];
  
    // Check if the meal ID already exists in the list
    if (mealIDs.includes(mealid)) {
      alert("Meal already in your fav list");
      location.reload();
    } else {
      // Add the meal ID to the list
      mealIDs.push(mealid);
  
      // Save the updated meal IDs to localStorage
      localStorage.setItem("mealIDs", JSON.stringify(mealIDs));
  
      alert("Meal Successfully added in fav list");
      location.reload();
    }

}

/**
 * Remove to Fav list
 * @param int mealid 
 */
function removetofavlist(mealid){
  let mealIDs = JSON.parse(localStorage.getItem("mealIDs")) || [];
  if (mealIDs.includes(mealid)) {
    mealIDs.pop(mealid);
    alert("Meal Remove from the Fav List");
    localStorage.setItem("mealIDs", JSON.stringify(mealIDs));
     location.reload();
  }
}

/**
 * Showing is details of meals behalf of meal id
 * @param int mealid 
 */
async function viewDetails(mealid){
  let url = '';
  var base_url = window.location.origin;
  url = base_url+'/MealApp/mealdetailview.html?id='+ mealid +'';
  location.href = url;
}
