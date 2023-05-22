

function gradecalculator(marks){
     if (marks>=90 && marks<=100) {
            console.log(`Fantastic! You Got ${marks} Marks,You received "A+" Grade.`);
        }
         else if (marks>=75 && marks<90) {
                console.log(`       Excellent! You Got ${marks} Marks,You received "A" Grade.`);
                
            } 
            else if  (marks>=50 && marks<75) {
                    console.log(`       Good! You Got ${marks} Marks,You received "B" Grade.`);
                    
                }
                 else  if  (marks>=35 && marks<50) {
                        console.log(     `       No Worries! You Got ${marks} Marks,You received "C" Grade. Need Some Progress`);
                        
                    } 
                    else  if (marks>0 && marks<35) {
                            console.log(`       Alas! You Got ${marks} Marks, You Failed try next time.`);
                             } 
                             else if(marks<=0 && marks>100 || marks==null) {
                                console.log(`       You Are Entered The Invalid ${marks} Marks, Please Enter The Correct Marks.`);
                            
                        }
                    }
                    console.log("");
                                    gradecalculator(88);
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(70);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(85);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(73);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(86);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(43);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(34);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator("nine");
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(0);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(null);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(undefined);
                                    
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(-16);
                                    console.log("---------------------------------------------------------------------------------");
                                    gradecalculator(350);
                                    console.log("****************************************************************************************");