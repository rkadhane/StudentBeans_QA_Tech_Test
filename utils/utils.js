class utils {
     
    //method compares if any no of characters in the searchString "Samsung" matches with the list title eg Samsung or SunGlass Hat
    //Partial comparison is must as searchString(Samsung) returns a list containing partial matching text such as "Sunglass Hut" (as Sung is common in both)
    //it can be modified to compare any number of characters instead of 3 chars

    compareListwithString(ListItem,searchString) { //this function compare if 3 characters matches the list title eg Samsung but in
      let str1 = ListItem.toLowerCase() // elements in the left div/pane of items list 
      let str2 = searchString.toLowerCase() //Search String samsung 
            
      let found = false
      let substr1
     
      for (let i =0; i< str2.length-3 ;i++) //loop 
      {
          substr1 = str2.substring(i,i+3) //compare 3 characters 
          if (str1.includes(substr1)) // if 3 characters match
          {
              found = true;
              break;
          }
          
      }
      return found;
    }
}

module.exports = utils
