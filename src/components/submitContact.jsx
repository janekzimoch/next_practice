
function SubmitContact() {
  async function onSubmit() {
    const first_name = document.getElementById("first").value;
    const last_name = document.getElementById("last").value;
    const pet = document.getElementById("pet").value;
    const married = document.getElementById("married").checked ? 1 : 0;
    const body = {'first_name': first_name,
                  'last_name': last_name,
                  'pet': pet,
                  'married': married
                }
    // console.log(body)
    const response = await fetch("http://localhost:3002/api/contacts",
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })


  }

  return (
    <div className="m-10">
        <label htmlFor="first" className="ml-5">First name:</label>
        <input type="text" id="first" className="border-solid border-2 rounded m-1" name="first" />

        <label htmlFor="last" className="ml-5">Last name:</label>
        <input type="text" id="last" className="border-solid border-2 rounded m-1" name="last" />

        <label htmlFor="pet" className="ml-5">Pet:</label>
        <input type="text" id="pet" className="border-solid border-2 rounded m-1" name="last" />

        <span>
          <span className="ml-5">
              Married
          </span>          
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="married" className="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label htmlFor="married" className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
            </label>
          </div>

        </span>
        <div>
        <button onClick={onSubmit} className="bg-slate-500 hover:bg-slate-700 text-white py-1 px-2 rounded m-2">Submit</button>
        </div>
    </div>
  );
}

export default SubmitContact;
