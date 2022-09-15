// TODO: Create a function to generate markdown for README
// function cards(data){
// console.log("make the html card");
// }

function generateHTML(data) {
    //console.log(data.getrole);
    
if (typeof data.officeNumber != "undefined"){
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.fname}</h5>
    <h6 class="card-subtitle mb-2 text-muted">"manager"</h6>
    <p class="card-text">${data.id}</p>
    <p class="card-text">${data.email}</p>
    <p class="card-text">${data.officeNumber}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>    
  `}else if(typeof data.school != "undefined"){
    return `                      
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.fname}</h5>
      <h6 class="card-subtitle mb-2 text-muted">"Intern"</h6>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>
      <p class="card-text">${data.school}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>  `
  }else if (typeof data.github != "undefined"){
    return `                      
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.fname}</h5>
      <h6 class="card-subtitle mb-2 text-muted">"Engineer"</h6>
      <p class="card-text">${data.id}</p>
      <p class="card-text">${data.email}</p>sdd
      <p class="card-text">${data.github}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>  `
  }
  }
  
  module.exports = generateHTML;