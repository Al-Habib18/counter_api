/**
 * @param {string} string 
 * @returns {object} counts
 */

const counter = (string) =>{

    const counts = {
        letters: 0,
        symbols: 0,
        numeric: 0
      };
    
      for (let char of string) {
        
        if (/[a-zA-Z]/.test(char)) {    // letter count
          counts.letters++;
        } else if (/[0-9]/.test(char)) {    // number count
          counts.numeric++;
        } else {
          counts.symbols++;     // symbol count
        }

      }
    
      return counts;
}


module.exports = counter;