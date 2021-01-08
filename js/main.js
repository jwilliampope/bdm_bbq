let emailCollector = document.getElementById("Email-Collector")
emailCollector.addEventListener("submit", event => {
  event.preventDefault()
  console.log("FIRE")
  let submitForm = new FormData(event.target)
  let userFirstName = submitForm.get("firstName")
  let userEmail = submitForm.get("emailAddress")
  let updatedHtmlContent = `
  <h2>Thank you, ${userFirstName}</h2>
      <p>We're connected!</p>
       

      <p class="fine-print">Communication sent to ${userEmail}</p>
  
  `
  let mainContent = document.getElementById("Main-Content")
  mainContent.innerHTML = updatedHtmlContent
})
