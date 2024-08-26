getList();
const baseURL = ""
itemsArray = []


function getList() {
    fetch(`${baseURL}/list`)
        .then((response) => {
            if (response.ok) {
            return response.json()
        }
        })
        .then((data) => {
            if (data) {
                itemsArray = data
                renderUL();
            }
        })
        .catch()
}

function renderUL() {
    const ul = document.getElementById('items');
    ul.innerHTML = ""

    itemsArray.foreach(item => {
        const li = document.createElement("li")
        li.id = `item-${item.id}`;
        li.classList = "flex text-lg justify-between bg-gray-100 p-1 rounded-lg px-5 mt-2"
        li.innerHTML = `
            <p class="w-full pr-5">
            <input readonly type="text" class="w-full py-2 bg-transparent ring-0 outline outline-0" value="${item.value}"/>
          </p>
          <div class="gap-5 flex">
            <button id="editbtn${item.id}" onClick="toggleEditSave(${item.value})">Edit</button>
            <button onClick="deleteItem(${item.value})">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        `;

        ul.appendChild(li)
    })
}

function toggleEditSave(id) {
    const input = document.getElementById(`item-${id}`).querySelector('input')
    if (input.readOnly) {
        editItem(id)
    } else {
        saveItem(id)
    }

}

function editItem(id) {
    const input = document.getElementById(`item-${id}`).querySelector('input')
    const editbtn = document.getElementById(`editbtn${item.id}`)
    input.readOnly = false
    editbtn.textContent = "Save"
    input.focus()
    input.setSelectionRange(input.value.length, input.value.length)


}

function saveItem(id) {
    
}
function deleteItem(id){}
// hello