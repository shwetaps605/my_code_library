public class CustomLinkedList {

    private Node head;
    private Node tail;

    private int size;

    public CustomLinkedList() {
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
        head = node;
        if(tail == null) {
            tail = head;
        }
        size+=1;
    }

    public void insertEnd(int val) {
        if(tail == null) {
            insertFirst(val);
            return;
        }
        Node node = new Node(val);
        tail.next = node;
        tail = node;
        size+=1;
    }

    public void insertEndWithoutTail(int val) {
        Node node = new Node(val);
        Node temp = head;
        while(temp.next!=null) {
            temp = temp.next;
        }
        temp.next = node;
        tail = node;
        size+=1;
    }

    public void insertAtNthPosition(int val, int n) {
        if(n > size) return;
        if(n == 0) {
            insertFirst(val);
            return;
        }
        if(n == size-1) {
            insertEnd(val);
            return;
        }
        Node node = new Node(val);
        int counter = 0;
        Node temp = head;
        Node prev = null;

        while(counter != n-2) {
            counter+=1;
        }

        node.next = temp.next;
        temp.next = node;
    }

    public int deleteFirst() {
        if(head == null) {
            tail = null;
        }
        int val = head.value;
        head = head.next;
        size-=1;
        return val;
    }

    public int deleteLast() {
        Node temp = head;
        while(temp.next != tail) {
            temp = temp.next;
        }
        tail = temp.next;
        temp.next = null;
        return tail.value;
    }

    public int deleteFromNthPosition(int n) {
        if(n <=1) {
            return  deleteFirst();
        }
        if( n == size) {
            return deleteLast();
        }
        Node prev = getNodeAtNthPosition(n-1);
        Node toBeDeleted = prev.next;
        prev.next = toBeDeleted.next;
        return toBeDeleted.value;
    }

    public Node getNodeAtNthPosition(int n) {
        if(n == 1) return head;
        if(n == size) return tail;

        Node temp = head;
        for(int i = 1; i <= n; i++) {
            temp = temp.next;
        }
        return temp;
    }

    private class Node {
        private int value;
        private Node next;

        public Node(int value) {
            this.value = value;
        }

        public  Node(int value, Node next) {
            this.value = value;
            this.next = next;
        }
    }
}
