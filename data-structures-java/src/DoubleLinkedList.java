public class DoubleLinkedList {
    int size;
    Node head;
    Node tail;

    public DoubleLinkedList() {
        this.size = 0;
    }

    public void display() {
        Node temp = head;
        while(temp!=null) {
            System.out.print(temp.value + "->");
            temp = temp.next;
        }
        System.out.println("END");
    }

    public void insertFirst(int val) {
        Node node = new Node(val);
        node.next = head;
        if(head != null) {
            if(head.next == null) {
                
            }
            Node nextNode = head.next;
            nextNode.prev = head;
        }
        head = node;
        if(tail == null) {
            tail = head;
        }
        size+=1;
    }

    public void insertLast(int val) {
        Node node = new Node(val);
        tail.next = node;
        node.prev = tail;
        tail = node;
        size=+1;
    }

    public void insertAtNthIndex(int val, int n){
        if(n == 0) {
            insertFirst(val);
        }
        if(n == size-1) {
            insertLast(val);
        }
        Node node = getNode(n);
        Node newNode = new Node(val);
        newNode.next = node;
        newNode.prev = node.prev;
        node.prev = newNode;
        size +=1;
    }

    public Node getNode(int index) {
        if (index == 0) return head;
        if (index == size-1) return tail;
        Node temp = head;
        for(int i=1;i<size-1;i++) {
            if(i == index) {
                return temp;
            }
            temp = temp.next;
        }
        return null;
    }

    public int deleteFirst() {
        int val = head.value;
        head = head.next;
        head.prev = null;
        size-=1;
        return val;
    }

    public int deleteLast() {
        int val = tail.value;
        tail = tail.prev;
        tail.next = null;
        size-=1;
        return val;
    }

    public int deleteFromNthIndex(int n) {
        if(n == 0) {
            return deleteFirst();
        }
        if( n == size-1) {
            return deleteLast();
        }
        Node node = getNode(n);
        Node prev = node.prev;
        Node next = node.next;

        prev.next = next;
        next.prev = prev;
        size -=1;
        return node.value;
    }


    private class Node {
        int value;
        Node next;
        Node prev;

        private Node(int value) {
            this.value = value;
        }
    }
}
