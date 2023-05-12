let nameNode=$('#userName');
let errorNode1=$('#error1');
let contactNode=$('#contactno');
let errorNode2=$('#error2');
let mailNode=$('#mailId');
let errorNode3=$('#error3');
let msgNode=$('#message');
let errorNode4=$('#error4');


$(function(){
    nameNode.blur(()=>validate1());
    contactNode.blur(()=>validate2());
    mailNode.blur(()=>validate3());
    msgNode.blur(()=>validate4());

    $('#regForm').submit(()=>validateForm());
});
function validate1(){
    errorNode1.text("");
    let name=nameNode.val();
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    nameNode.css({border:"2px red solid"});
    if(name==""){
        errorNode1.text("Your name is required");
        return false;
    }
    else if(name.length<2){
        errorNode1.text("name must contain atleast 2 characters");
        return false;
    }
    else if(fnamePattern.test(name)==false){
        errorNode1.text("name must have only alphabets");
        return false;
    }
    else{
        name.css({border:"2px green solid"});
        return true;
    }
}

let contactpattern = new RegExp("^[0-9]*$");
function validate2(){
    errorNode2.text("");
   // let contactpattern = new RegExp("/^(\+\d{1,3}[- ]?)?\d{10}$/");
    let contactno=contactNode.val();
    contactNode.css({border:"2px red solid"});
    if(contactno==""){
        errorNode2.text("Contact No is required");
        return false;
    }
    else if(contactpattern.test(contactno)==false){
        errorNode2.text("Please enter valid contact number");
        return false;
    }
    else{
        contactNode.css({border:"2px green solid"});
        return true;
    }
}
function validate3(){
    errorNode3.text("");
    let email=mailNode.val();
    mailNode.css({border:"2px red solid"});
    if(email==""){
        errorNode3.text("Email Id is required");
        return false;
    }
    else if(!email.includes('@')){
        errorNode3.text("Please enter valid EmailId");
        return false;
    }
    else if(email.endsWith('@')){
        errorNode3.text("Please enter valid EmailId");
        return false;
    }
    else{
        mailNode.css({border:"2px green solid"});
        return true;
    }
}
function validate4(){
    errorNode4.text("");
    let msg=msgNode.val();
    msgNode.css({border:"2px red solid"});
    if(msg==""){
        errorNode4.text("Message field is required");
        return false;
    }
    else{
        msgNode.css({border:"2px green solid"});
        return true;
    }
}


let nodeArray=[nameNode,mailNode,contactNode];
function validateForm(){
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
  
    let flagArray=[flag1,flag2,flag3];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
   
    let resvar = flag1 && flag2  && flag3;
    if(resvar!=true)
    {
        window.alert("Please fill all fields.");
    }
    else{
        function ShowAlert(){
            alert("Hey, Your message send successfully to our team.");
        }
        return (flag1 && flag2  && flag3)
    }
    
}