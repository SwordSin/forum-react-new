class Queue<T> {
    private data: T[] = [];
    push = (item:T) => this.data.push(item);
    pop = ():T|undefined => this.data.shift();  
}


const queue = new Queue<number>()

queue.push(12)
queue.push(12)
console.log(queue)




