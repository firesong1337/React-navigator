import { useState } from "react";

const users = [
  {
    id: "user_0",
    name: "John Doe",

    countParticipate: null,
  },
];

const tasks = [
  {
    id: "beach",
    title: "Убрать пляж",
    description: "Брайтон бич, 5 часов утра, в субботу",
    completed: false,

    participants: ["user_0"],
  },
];

// data access (db)
const getUsers = () => {
  return users.map((user) => ({
    ...user,
    countParticipate: user.countParticipate ?? 0,
  }));
};

const getTasks = () => tasks;

const getParticipantsByTask = (taskId) => {
  return getTasks().find((task) => task.id === taskId)?.participants;
};

const addParticipantToTask = (userId, taskId) => {
  const tasks = getTasks();
  const taskIdx = tasks.findIndex((task) => task.id === taskId);
  if (taskIdx >= 0) throw Error();

  tasks[taskIdx].participants.push(userId);
};

// business logic
const registerUserToTask = (userId, taskId) => {
  addParticipantToTask(userId, taskId);
  // add 1 to user count
};

// controller
const controller = {
  "/registerUser": registerUserToTask,
};

// React
const RegistrationForm = () => {
  const [value, setValue] = useState();

  const register = (/* input.value */) => {
    controller["/registerUser"](value.taskId, value.userId);
  };

  return <input onChange={(e) => setWithWalidation(e)} />;
};
