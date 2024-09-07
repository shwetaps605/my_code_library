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
            head.prev = node;
        }
        head = node;
        if(tail == null) {
            tail = head;
        }
        size = size +1;
        //System.out.println("INSERT FIRST: current size" + size);
    }

    public void insertLast(int val) {
        Node node = new Node(val);
        tail.next = node;
        node.prev = tail;
        tail = node;
        size = size +1;
        //System.out.println("INSERT LAST: current size" + size);
    }

    public void insertAtNthIndex(int val, int n){
        System.out.println("index->"+n);
        if(n == 0) {
            insertFirst(val);
            return;
        }
        if(n == size-1) {
            insertLast(val);
            return;
        }
        Node node = getNode(n);
        Node newNode = new Node(val);
        System.out.println("node returned->"+ node.value);
        newNode.prev = node;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.next = newNode;
        size = size + 1;
        //System.out.println("INSERT NTH: current size" + size);
    }

    public Node getNode(int index) {
        if (index == 0) return head;
        if (index == size-1) return tail;
        Node temp = head;
//        System.out.println("SIZE VALUE IS"+ size);
//        System.out.println("INDEX VALUE IS"+ index);
        for(int i=1;i<size-1;i++) {
            //System.out.println("checking "+i);
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
        size = size - 1;
        return val;
    }

    public int deleteLast() {
        int val = tail.value;
        tail = tail.prev;
        tail.next = null;
        size = size - 1;
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
        size = size - 1;
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
