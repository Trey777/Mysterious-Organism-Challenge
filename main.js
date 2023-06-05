//Welcome


// Returns a random DNA base

const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (orgNum, DNAbase) => {
  return {
    orgNum,
    DNAbase,
    mutate() {
      let mutatedBase = DNAbase[Math.floor(Math.random() * 14)]; //pulling random base from DNAbase
      const mutatedBaseIndex = DNAbase.findIndex((letter) => {
        // to find randon base
        return letter === mutatedBase;
      });
      mutatedBase = returnRandBase();
      while (DNAbase[mutatedBaseIndex] === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      DNAbase.splice(mutatedBaseIndex, 1, mutatedBase); //using splice to replace the original base with the mutated one
      return DNAbase;
    },
    compareDNA(inputSpeciman) {
      const mutatedArr = this.mutate();
      let count = 0; //
      let twins = 0;
      for (letter of inputSpeciman) {
        //could this have worked better as a while loop perhaps.
        if (mutatedArr[count] === letter) {
          twins++;
        }
        count++; //using this to iterate thru mutatedArr
      }
      const calculatedPercent = ((twins / 15) * 100).toFixed();
      if (calculatedPercent != 0) {
        return `Specimen #1 and specimen #2 have ${calculatedPercent}% DNA in common.`;
      } else {
        return `specimen #1 and specimen #2 have no DNA in common.`;
      }
    },
    complementStrand(inputSpeciman) {
      console.log(inputSpeciman);
      const complimentArr = [];
      let myCount = 0;
      for (myLetter of inputSpeciman) {
        if (myLetter === "A") {
          complimentArr.push("T");
        } else if (myLetter === "T") {
          complimentArr.push("A");
        } else if (myLetter === "G") {
          complimentArr.push("C");
        } else if (myLetter === "C") {
          complimentArr.push("G");
        }
      }
      console.log(complimentArr);
    },
  };
};
const organism24 = pAequorFactory(24, mockUpStrand());

//organism24.complementStrand(mockUpStrand());
//console.log(organism24.mutate()); // To create a mutated base
//console.log(organism24.compareDNA(mockUpStrand())); //To compare two bases and find related percentage
//organism24.compareDNA(7,mockUpStrand()); // this will 
//console.log(organism24.complementStrand(mockUpStrand)); //Changes the A>T/T>A | G>C/C>A
//==================Thirty Objects==================
const symbiosisGroupArr = [];
for (let i = 1; i <= 30; i++) {
  symbiosisGroupArr.push(pAequorFactory([i], mockUpStrand()));  // Using the object factory, this makes 30 DNA sequences
}
console.log(symbiosisGroupArr);
//==================Thirty Objects==================
