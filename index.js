async function searchmeal(){
    let meal = document.getElementById('mealname').value;
    if (meal =='') {
      alert("Please search the meal");
    } else {
        let response =  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+meal+'');
        let result =  await response.json();
        console.log(result);
    }
    
}