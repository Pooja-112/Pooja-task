


function Palindrome(str){
    var len = str.length;

    
    var i =0;
    var j =len-1;
    while(i<j)
    {
        if(str[i]!=str[j])
        {
            console.log("the given string is not palindrome")
            return false
            
        }
        i+= 1;
        j-= 1; 
         
    }
    console.log("the given string is palindrome " +  str);
    return true; 

}
Palindrome("race")
