//Initiallising connectionstring
 
 //Function to connect to database and execute query var 
  executeQuery = function(res, query){        
       sql.connect(dbConfig, function (err) {      
               if (err) {                       
                console.log("Error while connecting database :- " + err);                     
                res.send(err);                   }                  
                else {                          
                   
                // create Request object                         
                 var request = new sql.Request();                    
                      // query to the database                      
                    request.query(query, function (err, res) {    
                                            if (err) {       
                                                        console.log("Error while querying database :- " + err);                                  
                             res.send(err);                                     
                     }                                    
                      else {                               
                                 res.send(res);                                      
                           }                              
                  });                     
               }       });        
           } //GET API
         app.get("/api/user",
        
        function(req , res){                
             var query = "select * from TblTodoRecord ";                
              executeQuery (res, query); });
               //POST API 
              