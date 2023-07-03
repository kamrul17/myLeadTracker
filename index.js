// let myLeads = [];
// const inputEl = document.getElementById("input-el");

// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// const deleteBtn = document.getElementById("delete-btn");

// const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

// if (leadsFromStorage) {
//   myLeads = leadsFromStorage;
//   renderLeads();
// }

// function renderLeads() {
//   let listItems = " ";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//         <li>
//          <a target = '_blank' href='${myLeads[i]}'>
//           ${myLeads[i]}
//          </a
//         </li>
//      `;
//   }
//   ulEl.innerHTML = listItems;
// }

// deleteBtn.addEventListener("dblclick", function () {
//   localStorage.clear();
//   myLeads = [];
//   renderLeads();
// });

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   inputEl.value = "";
//   localStorage.setItem("myLeads", JSON.stringify(myLeads));

//   renderLeads();
// });

// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
let myLeads = [];
const inputEl = document.getElementById("input-el");

const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

const saveBtn = document.getElementById("save-btn");
if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  render(myLeads);
}

saveBtn.addEventListener("click", function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = " ";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
        <li>
         <a target = '_blank' href='${leads[i]}'>
          ${leads[i]}
         </a
        </li>
     `;
  }
  ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});
// console.log(tab[0].URL);
// "<li><a target = '_blank' href='#'>" + myLeads[i] + "</a></li>";
// // localStorage.setItem("myLeads", "www.googlksjwe.com");
// localStorage.getItem("myLeads");
// localStorage.clear("myLeads");
// console.log(localStorage);
// ulEl.innerHTML = listItems;
//  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
// const liEl = document.createElement("li");
// liEl.textContent = myLeads[i];
// ulEl.append(liEl);
