SinglyLinkedListNode* reverse(SinglyLinkedListNode* head) {
    SinglyLinkedListNode* curr = head;
    SinglyLinkedListNode* prev = NULL;
    SinglyLinkedListNode* prev2 = NULL;

    while(curr->next != NULL)
    {
        prev = curr;
        curr = curr -> next;

        if (prev == head)
        {
            prev-> next = NULL;
            prev2 = prev;
        }
        else {

            prev -> next = prev2;
            prev2 = prev;
            
        }
    }

    curr -> next = prev;
    head = curr;

    return head;


}
