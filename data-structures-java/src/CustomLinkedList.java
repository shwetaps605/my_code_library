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
