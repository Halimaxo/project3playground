// const calendarCurrentMonth = new Date();
const calendarCurrentMonth = dayjs().month();

const tasks = [
  {
    type: "success",
    taskDescription: "Task 1",
    contactPhone: "0000000000",
    contactEmail: "crian@email.com",
    contactFirstName: "crian",
    contactLastName: "cernighan",
    reminderDate: "07/18/2023",
  },
  {
    type: "warning",
    taskDescription: "Task 12",
    contactPhone: "0000002000",
    contactEmail: "xrian2@email.com",
    contactFirstName: "xrianx",
    contactLastName: "xernighan",
    reminderDate: "07/19/2023",
  },
  {
    type: "success",
    taskDescription: "Task 3",
    contactPhone: "0000034000",
    contactEmail: "x2@email.com",
    contactFirstName: "xrianx",
    contactLastName: "xernighan",
    reminderDate: "07/19/2023",
  },
  {
    type: "success",
    taskDescription: "Task 4",
    contactPhone: "0000034000",
    contactEmail: "x2@email.com",
    contactFirstName: "xrianx",
    contactLastName: "xernighan",
    reminderDate: "08/19/2023",
  },
];

/*
1. Figure out what month the calendar is displaying
- That value is going to need to be kept in state

2. Find the tasks that match the current month displayed

  */

const currentMonthsTasks = tasks.filter((task) => {
  return new Date(task.reminderDate).getMonth() === calendarCurrentMonth;
});

console.log(currentMonthsTasks);

const getDaysOfCurrentMonth = currentMonthsTasks.map((task) =>
  new Date(task.reminderDate).getDate()
);

console.log(getDaysOfCurrentMonth);

Lo_.uniq([1, 1, 2], true);
const uniqueDaysWithTasks = _.uniq([getDaysOfCurrentMonth, true]);
