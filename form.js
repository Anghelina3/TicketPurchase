const preview = document.getElementById("img-upload");
const input = document.getElementById("imgUpload");

preview.addEventListener("click", () => {
  input.click();
});

input.onchange = () => {
  const file = input.files[0];
  if (file) preview.src = URL.createObjectURL(file);
  preview.style.width = "50px";
};

document.getElementById("submit").addEventListener("click", function () {
  const formSection = document.getElementById("form-section");
  const ticketSection = document.getElementById("ticket-section");

  formSection.classList.add("d-none");
  ticketSection.classList.remove("d-none");

  ticketSection.classList.add(
    "d-flex",
    "flex-row",
    "justify-content-center",
   
  );
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.maxWidth = "800px";
  wrapper.style.display = "inline-block";
  wrapper.style.width = "100%";



  const img = document.createElement("img");
  img.src = "/images/pattern-ticket.svg";
  img.alt = "Ticket pattern";
  img.style.display = "block"; 
  img.classList.add("position-relative");

  

  const block = document.createElement("div");
  block.classList.add(
      "position-absolute",
     "text-center",      
  "text-white"
  );
  block.style.top = "10%";                
block.style.left = "5%";              
block.style.width = "60px";  

  const imgLogo = document.createElement("img");
  imgLogo.src = "/images/logo-full.svg";
  imgLogo.style.width = "clamp(250px, 15vw, 400px)"; 
  
  const data = document.createElement("p");
  data.innerHTML = "Jan 31, 2025 / Austin TX";


  const userImage = document.createElement("img");
  userImage.src = document.getElementById("imgUpload").value;


  block.appendChild(imgLogo);
  block.appendChild(data);
  block.appendChild(userImage);
  wrapper.appendChild(img);
  wrapper.appendChild(block);
  ticketSection.appendChild(wrapper);
 
  let name = document.getElementById("name").value;
  document.querySelector(
    "h1"
  ).innerHTML = `Congrats, ${name}!<br>Your ticket is ready.`;
  let email = document.getElementById("email").value;
  document.querySelector(
    "h6"
  ).innerHTML = `We've emailed your ticket to<br> <span class="text-danger">${email}</span> and will send updates in<br> the run up to the event`;

  


});
