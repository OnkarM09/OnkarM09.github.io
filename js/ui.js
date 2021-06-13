const contacts=document.querySelector('.contacts')
document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');    //Mobile SideNav
    var modals = document.querySelectorAll('.modal');      //Modal
    var action_button = document.querySelectorAll('.fixed-action-btn') //Action Button
    M.Sidenav.init(sidenav);
    M.Modal.init(modals);
    M.FloatingActionButton.init(action_button);
});

const renderContacts = (data, id) => {
    const html = `<li class="collection-item contact avatar " data-id=${id} ">      
                  Name:<span class="name">${data.name}</span>
                  <p>Phone Num:<span class="phone">${data.phone}</span></p>
                  <div href="#!" class="secondary-content"  data-id=${id}>
                  <i class="material-icons modal-trigger" href="#edit_modal_contact" 
                  style="cursor: pointer;">edit</i>
                  <i class="material-icons" style="cursor: pointer;">${data.favorite?'star':'star_border'}</i>
                  <i class="material-icons" style="cursor: pointer;">delete_outline</i>
                  </div>
                  </li>`
                  contacts.innerHTML +=html
}

const removeContact=(id)=>{
    const contact=document.querySelector(`.contact[data-id=${id}`)
    contact.remove()
}
const updateContacts=(data,id)=>{
    const contact=document.querySelector(`.contact[data-id=${id}`)
    contact.querySelector('.name').innerHTML=data.name
    contact.querySelector('.phone').innerHTML=data.phone
    contact.querySelectorAll('.material-icons')[1].textContent=data.favorite?'star':'star_border'
}