const tasks = [];

function addNewTask(title, description) {
  const newTask = {
    title: title,
    description: description,
    status: uncomplete,
  };
  tasks.push(newTask);
  return tasks.length;
}

addNewTask('Chạy bộ', '5h dậy, ra công viên chạy bộ');
addNewTask('Đi chợ', '6h, đi chợ');
addNewTask('Ăn sáng', '7h, làm bữa sáng ăn trước khi đi làm');
addNewTask('Đi làm', '7h30, đến công ty làm việc');
addNewTask('Đón con', '17h, đến trường đón con');
addNewTask('Dọn dẹp nhà cửa', '18h, quét dọn, lau nhà, giặt đò');
addNewTask('Nấu cơm', '19h, nấu cơm, ăn cơm');
addNewTask('Đi ngủ', '23h, lên giường đi ngủ');

function findTaskName(title) {
  for (leti = 0; i < task.length; i++) {
    if (tasks[i].title === title) {
      return i;
    }
  }
  return -1;
}
