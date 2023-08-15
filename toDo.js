const list = [
	{name: 'HTML', status: 'Done', priority: 'Low'},
	{name: 'CSS', status: 'In progress', priority: 'Medium'},
	{name: 'JavaScript', status: 'To do', priority: 'High'},
]
const addTask = (taskName, taskPriority) => {
	list.push({ name: taskName, status: 'To do', priority: taskPriority });
};
const deleteTask = (taskName) => {
	const taskIndex = list.findIndex(index => index.name === taskName);
	if (list.includes(list[taskIndex])) {
		list.splice(taskIndex, 1);	
	} else {
		return (null);
	}
};
const changeStatus = (taskName, taskStatus, taskPriority) => {
	const taskIndex = list.findIndex(index => index.name === taskName);
	list[taskIndex] = { name: taskName, status: taskStatus, priority: taskPriority };		
}
const showList = () => {
	for (tasks of list) {
		console.log(tasks);
	}
};
addTask('GIT', 'High');
deleteTask('JavaScript');
changeStatus ('HTML', 'To Do', 'High')
showList();