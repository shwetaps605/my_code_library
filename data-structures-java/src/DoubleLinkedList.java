public class DoubleLinkedList {
    int size;
    Node head;
    Node tail;

    public DoubleLinkedList() {
        this.size = 0;
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
