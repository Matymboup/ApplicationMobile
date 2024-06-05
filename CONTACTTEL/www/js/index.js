document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    let options=new ContactFindOptions();
    options.multiple=true;
    options.hasPhoneNumber=true;
    let fields=['name'];
    navigator.contacts.find(fields,showContacts,handleError,options);


}
function showContacts(contacts) {
    let code= '';
    for(let i=0; i<contacts.length; i++){
        code+= `
                    <li>
                    <a href="#">
                        <img src="img/photo.png" alt="photo contact">
                        <h1>${contacts[i].name.formatted}</h1>
                        <p>${contacts[i].phoneNumbers[0].value}</p>
                    </a>
                </li>
        ` ;
    }
//contactList=document.getElementById('contactList');
   contactList.innerHTML= code;
    $(contactList).listview('refresh');
   
    
}

function addContact() {
    let contactName = document.getElementById('contactName').value;
    let contactPhoneNumber = document.getElementById('contactPhoneNumber').value;
    
    let contact = navigator.contacts.create();
    contact.displayName = contactName;
    contact.nickname = contactName;
    let phoneNumbers = [];
    phoneNumbers[0] = new ContactField('mobile', contactPhoneNumber, true);
    contact.phoneNumbers = phoneNumbers;
    
    contact.save(contactSaved, handleError);
}

function contactSaved() {
    alert('Contact ajouté avec succès');
    loadContacts();
}

function handleError(error) {
    console.log(error);
    alert('une erreur inatendues\'est produite');
}