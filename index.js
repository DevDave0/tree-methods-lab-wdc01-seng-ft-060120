function inOrder(currentNode){
    if(currentNode.left){
        inOrder(currentNode.left)
    }
    if(currentNode.right){
        inOrder(currentNode.right)
    }
    console.log(currentNode.data)
}

function findOrAdd(currentNode, newNode){
    let result = false 
    if (newNode.data === currentNode.data){
        return true
    } else if (newNode.data < currentNode.data){
        if (!currentNode.left){
            currentNode.left = newNode
            return false
        }
        result = findOrAdd(currentNode.left, newNode)
    } else {
        if(!currentNode.right){
            currentNode.right = newNode
            return false
        }
        result = findOrAdd(currentNode.right, newNode)
    }
    return result 
}

function max(currentNode){
    let maxNode;
    if (!currentNode.right){
        maxNode=currentNode
        return maxNode
    }
    maxNode = max(currentNode.right)
    return maxNode
}

function min(currentNode){
    let minNode
    if(!currentNode.left){
        minNode = currentNode
        return minNode
    }
    minNode = min(currentNode.left)
    return minNode
}