// ----------------------------------------------  Task I ---------------------------------------------//

function charCodeSum (word) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        sum += word.charCodeAt(i);
    } 
    return sum;
}

function selectCorrectSublist (word, list) {
  const sum = charCodeSum(word);
  let result = list.filter((el) => el.length === word.length);
  result = result.filter((el) => charCodeSum(el) === sum)
  return result
}

// ----------------------------------------------------------------------------------------------------//


// ---------------------------------------------- Task II ---------------------------------------------//

function charRemover( text, aword ) {
    const search = `\\${aword}`;
    const searchRegExp = new RegExp(search, 'g');
    console.log(search, '----------', searchRegExp);

    text = text.replace(searchRegExp, '');
  return text;
}

// ----------------------------------------------------------------------------------------------------//

// ---------------------------------------------- Task III ---------------------------------------------//

function putWords( text, arr ) {

    for (let word of arr) {
      text = text.replace("_", word)
    }

  return text;
}

// ----------------------------------------------------------------------------------------------------//

// ---------------------------------------------- Task IV ---------------------------------------------//

function findLongestWord ( text ) {
   const re = /[.,\/ -]/;
   text = text.split(re).filter( (el1) => el1 != false);
   let lgth = 0;
   for (let word of text) {
     if ( word.length >= lgth) {
       lgth = word.length;
     }
   }
   return text.filter( (wd) => wd.length == lgth)
}

// ----------------------------------------------------------------------------------------------------//