import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

function EditContact() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const AllContact = useSelector((store) => store.contacts);

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  useEffect(() => {
    AllContact.filter((el) => el.id == id && setForm(el));
  }, []);

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl font-bold mb-4">Edit Contact Screen</h2>
      <div className="mb-4 flex w-full">
        <label
          className="block font-bold mb-2"
          style={{ width: "70%" }}
          htmlFor="first-name"
        >
          First Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex w-full">
        <label
          className="block font-bold mb-2"
          style={{ width: "70%" }}
          htmlFor="last-name"
        >
          Last Name
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex w-full">
        <label
          className="block font-bold mb-2"
          style={{ width: "70%" }}
          htmlFor="last-name"
        >
          Mobile Number
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-md"
          id="last-name"
          type="number"
          name="mob"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex ml-16 gap-20 ">
        <label className="block font-bold mb-2 ml-8" htmlFor="status">
          Status
        </label>
        <div className="ml-7 mb-4">
          <div className="radio">
            <label>
              <input
                type="radio"
                name="status"
                value={"active"}
                onChange={handleChange}
              />
              Active{" "}
            </label>
          </div>
          <div className="radio ml-3">
            <label>
              <input
                type="radio"
                name="status"
                value={"inactive"}
                onChange={handleChange}
              />
              Inactive{" "}
            </label>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Editted Contact
      </button>
    </div>
  );
}

export default EditContact;
