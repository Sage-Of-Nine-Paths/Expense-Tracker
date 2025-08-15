import React, { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ExpenseForm = ({
  amount,
  setAmount,
  category,
  setVisibleForm,
  setCategory,
  editId,
  setEditId,
  handleAddExpense,
}) => {
  const dispatch = useDispatch();
  const {
    addLoading,
    addError,
    updateError,
    updateSuccess,
    addSuccess,
    updateLoading,
  } = useSelector((state) => state.expenses);

  useEffect(() => {
    if (addError) {
      toast.error(addError);
      dispatch({ type: "RESET_STATUS" });
    }
  }, [addError, dispatch]);

  useEffect(() => {
    if (addSuccess) {
      toast.success("Expense added");
      dispatch({ type: "RESET_STATUS" });
    }
  }, [addSuccess, dispatch]); 

  useEffect(() => {
    if (updateError) {
      toast.error(updateError);
      dispatch({ type: "RESET_STATUS" });
    }
  }, [updateError, dispatch]);

  useEffect(() => {
    if (updateSuccess) {
      toast.success("Expense updated");
      dispatch({ type: "RESET_STATUS" });
    }
  }, [updateSuccess, dispatch]);

  return (
    <div className="fixed shadow-lg border text-light_black rounded-lg z-10 bg-white w-4/5 px-5 py-3 top-50 left-5 bottom-50 right-5 mx-auto">
      <div className="flex text-lg font-semibold items-center mb-2">
        <h1>{editId ? "Edit" : "Add"} Expense</h1>
        <div
          className="w-max cursor-pointer ml-auto text-3xl"
          onClick={() => {
            setAmount(null)
            setCategory(null)
            setVisibleForm(false)}}
        >
          <IoMdCloseCircleOutline />
        </div>
      </div>
      <form onSubmit={handleAddExpense} className="mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
          className="w-full px-4 py-2 border rounded-md mb-2"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
          className="w-full px-4 py-2 border rounded-md mb-2"
        />
        {addLoading ? (
          <button
            type="submit"
            disabled={addLoading}
            className="bg-blue_c mt-4 w-max mx-auto block text-white py-2 px-4 rounded-md"
          >
            <div className="flex justify-center items-center">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-2 animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Adding...
            </div>
          </button>
        ) : updateLoading ? (
          <button
            type="submit"
            disabled={updateLoading}
            className="bg-blue_c mt-4 w-max mx-auto block text-white py-2 px-4 rounded-md"
          >
            <div className="flex justify-center items-center">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-2 animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="#1C64F2"
                />
              </svg>
              Updating...
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue_c mt-4 w-max mx-auto block text-white py-2 px-4 rounded-md"
          >
            {editId ? "Update Expense" : "Add Expense"}
          </button>
        )}
      </form>
    </div>
  );
};

export default ExpenseForm;
