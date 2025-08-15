import axios from "axios";
const baseurl = "https://expense-tracker-nu-weld.vercel.app/api/expenses";
// const baseurl = "http://localhost:3000/api/expenses";

export const fetchExpenses = (month, year) => async (dispatch) => {
  dispatch({ type: "FETCH_EXPENSES_REQUEST" }); // Dispatch request action

  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.get(`${baseurl}/${month}/${year}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "FETCH_EXPENSES_SUCCESS", payload: res.data });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      errorMessage = error.response.data?.message || error.message;
    } else if (error.request) {
      errorMessage = 'Network error. Please check your connection or try again later.';
    }
    dispatch({
      type: "FETCH_EXPENSES_ERROR",
      payload: errorMessage,
    });
  }
};

export const addExpense = (expenseData) => async (dispatch) => {
  dispatch({ type: "ADD_EXPENSE_REQUEST" });

  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.post(baseurl, expenseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "ADD_EXPENSE_SUCCESS", payload: res.data });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      errorMessage = error.response.data?.message || error.message;
    } else if (error.request) {
      errorMessage = 'Network error. Please check your connection or try again later.';
    }
    dispatch({
      type: "ADD_EXPENSE_ERROR",
      payload: errorMessage,
    });
  }
};

export const updateExpense = (id, updates) => async (dispatch) => {
  dispatch({ type: "UPDATE_EXPENSE_REQUEST" });

  try {
    const token = sessionStorage.getItem("token");
    const res = await axios.patch(`${baseurl}/${id}`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "UPDATE_EXPENSE_SUCCESS", payload: res.data });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      errorMessage = error.response.data?.message || error.message;
    } else if (error.request) {
      errorMessage = 'Network error. Please check your connection or try again later.';
    }
    dispatch({
      type: "UPDATE_EXPENSE_ERROR",
      payload: errorMessage,
    });
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_EXPENSE_REQUEST" });

  try {
    const token = sessionStorage.getItem("token");
    await axios.delete(`${baseurl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "DELETE_EXPENSE_SUCCESS", payload: id });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred. Please try again.';
    if (error.response) {
      errorMessage = error.response.data?.message || error.message;
    } else if (error.request) {
      errorMessage = 'Network error. Please check your connection or try again later.';
    }
    dispatch({
      type: "DELETE_EXPENSE_ERROR",
      payload: errorMessage,
    });
  }
};


export const logout = () => (dispatch) => {
  // Your logout logic here
  dispatch({ type: "LOGOUT" });
};
