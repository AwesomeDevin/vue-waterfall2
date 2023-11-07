class EventEmit{
  constructor(){
    this.events = {}
  }
  on(eventName, callback){
    if(!this.events[eventName]){
      this.events[eventName] = []
    }
    this.events[eventName].push(callback)
  }
  emit(eventName, ...args){
    if(this.events[eventName]){
      this.events[eventName].forEach(cb => {
        cb(...args)
      })
    }
  }
  off(eventName, callback){
    if(this.events[eventName]){
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
    }
  }
}

export default new EventEmit()