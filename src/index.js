import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const allBtns = document.querySelectorAll(".expand_button")
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target)
      event.preventDefault()
      const targetButton = event.target
      const targetArticle = targetButton.parentElement.parentElement.parentElement.querySelector(".article_body")
      console.log(targetArticle)
      if (targetButton.innerText === "V") {
        targetArticle.style.display = "none"
        console.log(targetArticle.style.display)
        targetButton.innerText = ">"
      } else if (targetButton.innerText != "V") {
        targetArticle.style.display = "block"
        console.log(targetArticle.style.display)
        targetButton.innerText = "V"
      }
      })
    })
  // your code here
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const allBtns = document.querySelectorAll(".highlightBtn")
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault()
      console.log(event.target)
      const targetButton = event.target
      const targetArticle = targetButton.parentElement.parentElement
      console.log(targetArticle)
      if (targetButton.innerText === "+") {
        targetArticle.classList.add("highlight")
        targetButton.innerText = "-"
      } else if (targetButton.innerText != "+") {
        targetArticle.classList.remove("highlight")
        targetButton.innerText = "+"
      }
      })
    })
 // your code here
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();