Tasks = new Mongo.Collection ('tasks');
import './main.html';

if (Meteor.isClient) {
	Template.tasks.helpers({
		tasks: function(){			
			return Tasks.find({});
			
			
		}
	});

Template.tasks.events({
		
		"submit.add-task": function (event){
				  
                  var userName = document.getElementById("txtName").value; 
                  userName=userName.toUpperCase();   
                  const task = Tasks.findOne({userName:userName});   			  
                           
                      if (userName.length == 0)        
                   {
    
                  	   alert("Su lista de compras esta vacia.");
    
                       return false;
    
  	                }

   	             else if (task)
    
 	                {

 	                   alert('El elemento ' + userName +' ya se encuentra registrado');
                  	
   	                }

	   			 else
   
                    {
    
                      alert(userName + " anotado a la lista");
					
                           				
                   
				    	Tasks.insert(
				     	{							
				        	userName:userName,

				     	})
				
				    	event.target.userName.value =' ';

				    	return false;
			}
		},
	

		"click .delete-task": function(event){
			if (confirm("Eliminar")){
				Tasks.remove(this._id);
			}
			return false;
		}		
		
	});

}


if (Meteor.isServer){

}

