function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function logTaskState(task) {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`)
    },

    markCompleted: function completeTask(task) {
      this.complete = true
    }
  }
  return task
}





const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box')
const task2 = newTask('Do Laudry', '😨')
const tasks = [task1, task2]

task1.logState()
task1.markCompleted()
task1.logState()
