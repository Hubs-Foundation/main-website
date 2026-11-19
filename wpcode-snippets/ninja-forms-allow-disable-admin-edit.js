async function loadEvent() {
	if (document.querySelector("#nf-submissions-element")) {
		while(!document.querySelector(".nf-forms-actions select#inspector-select-control-0")) {await new Promise(r => setTimeout(r, 100));}
		let formSelector = document.querySelector(".nf-forms-actions select#inspector-select-control-0");
		if (formSelector) {
			async function removeFormEditButtonsForNonEditableForms() {
				if (formSelector.value == 0) {return} // no form has been selected yet

				await new Promise(r => setTimeout(r, 1000)); // pause for a second to let the old form unload
				while(!(document.querySelector(".nf-submissions-table #the-list td").textContent.includes("no submission") || document.querySelector(".nf-submissions-table #the-list td .nf-submissions-cell"))) {await new Promise(r => setTimeout(r, 100));}

				let selectedFormName = formSelector.options[formSelector.selectedIndex].text;
				if (selectedFormName.includes("[No Admin Edit]")) {
					document.querySelectorAll(".nf-submissions-table span.edit").forEach(editButton => editButton.remove());
				}
			}
			formSelector.addEventListener("change", (event) => {removeFormEditButtonsForNonEditableForms()}); // handle form changes
			removeFormEditButtonsForNonEditableForms(); // handle initial form load
		}
	}
}
window.addEventListener("load", (event) => {loadEvent()});
