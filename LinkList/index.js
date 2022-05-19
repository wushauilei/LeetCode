// 链表

class LinkNode {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class LinkNodeList {
    constructor () {
        this.head = null
        this.length = 0
    }

    appent (val) {
        let p = this.head
        let linkNode = new LinkNode(val)
        if (this.head) {
            while(p.next) {
                p = p.next
            }
            p.next = linkNode
        } else {
            this.head = linkNode
        }
        this.length++
    }

    toString () {
        let p = this.head
        let ret = ''
        if (this.head) {
            do {
               ret += (p.val + '=>') 
               p = p.next
            } while (p.next);
            ret += p.val
            console.log(ret)
        } else {
            console.log('empty')
        }
    }
}

const linkList = new LinkNodeList()

linkList.appent(1)
linkList.appent(2)
linkList.appent(6)
linkList.appent(4)
linkList.appent(5)
linkList.appent(6)

// linkList.toString()
// console.log(linkList.length)
// console.log(linkList.head)
