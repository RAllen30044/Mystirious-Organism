// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory=(specimenNum,dna)=>{
  return{  
    specimenNum,
      dna,
    mutate(){
  
  const newBase= ['A','T','C','G'];
  let strand=newBase[Math.floor(Math.random() * 4)];
  for(let i=0; i< strand.length; i++){
  newBase.splice(newBase.indexOf(strand[i]),i+1);
  }
  console.log(newBase);
  return strand;
       },
        compareDNA(object){
          let r=0;
          for(let i=0; i<object.length;i++){
            object[i];
            this.dna[i];
            if(this.dna[i]==object[i]){
              
              r=r+1;
              
            }
          }
         return `Specimen #1 and specimen #2 have ${(r/object.length)*100}% DNA in common`;
        },
        willLikelySurvive(){
          let r=0;
          let t=0;
          for(let i = 0; i<this.dna.length;i++){        if(this.dna[i]=='C'){
            r=r+1;}
            if(this.dna[i]=='G'){
              t=t+1;
            }
            
          }
          if((r/this.dna.length>=6/10)|| ((t/this.dna.length>=6/10))){
            return true;
          }else{
            return false;
          }
          },
  }
      }
  
  const hasSurvived =(number)=>{
            let storedDNA=[];
          let i=storedDNA.length;
          while( i != number){ 
            let j = mockUpStrand(); 
            if(pAequorFactory(number,j).willLikelySurvive()==true){
              storedDNA.push(j);
            }i=storedDNA.length;
          }
          return storedDNA;
          }
   
  console.log(hasSurvived(30));