document.querySelector('form').addEventListener('submit',mylogin);
function mylogin(event){
    event.preventDefault();
    let fname= document.querySelector('#task').value;
    let lname=document.querySelector('#task2').value;
    let pass=document.querySelector('#inputPassword').value;
    displaytable(fname,lname,pass);
    
}

function displaytable(fname, lname,  pass){
    let row=document.createElement('tr');
    let td1=document.createElement('td');
    td1.innerText=fname;
    td1.className='px-5';
    let td2=document.createElement('td');
    td2.innerText=lname;
    td2.className='px-5';
    let td3=document.createElement('td');
    td3.innerText=pass;
    row.append(td1,td2,td3);
    td3.className='px-5';
    document.querySelector('tbody').append(row);
}