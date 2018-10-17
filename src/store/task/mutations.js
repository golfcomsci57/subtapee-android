export const SET_TASKS = (state, tasks) => {
  state.tasks = tasks.data
};

export const ADD_TASK = (state, task) => {
  state.tasks.push(task)
};

export const setCurrentTask = (state, payload) => {
  state.task_id = payload
};

