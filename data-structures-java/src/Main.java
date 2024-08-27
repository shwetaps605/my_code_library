public class Main {
    public static void main(String[] args) {
        CustomLinkedList linkedList = new CustomLinkedList();
        linkedList.insertFirst(5);
        linkedList.insertFirst(20);
        linkedList.insertFirst(7);
        linkedList.display();
        linkedList.insertEnd(19);
        linkedList.insertEnd(2);
        linkedList.display();
        linkedList.insertEndWithoutTail(28);
        linkedList.display();
        linkedList.insertAtNthPosition(9,3);
        linkedList.display();
        linkedList.insertAtNthPosition(24,2);
        linkedList.display();
        int removed = linkedList.deleteFirst();
        System.out.println(removed + " was removed");
        linkedList.insertFirst(12);
        linkedList.display();
        System.out.println(linkedList.deleteLast() + " was removed");
        linkedList.display();
        System.out.println(linkedList.deleteFromNthPosition(4) + " was removed");
        linkedList.display();


    }
}