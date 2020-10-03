bool compare_lists(SinglyLinkedListNode* head1, SinglyLinkedListNode* head2) {

    int count1 = 0;
    int count2 = 0;

    while( head1->next != NULL)
    {
        while( head2->next != NULL)
        {
            if ( (head1->data - head2->data) != 0)
            {
                return 0;
            }
            else 
            {
                head2 = head2->next;
                count2 +=1;
                break;
            }
        }
         
        head1 = head1 -> next;
        count1 += 1;
    }

    if (count1 != count2)
        {
            return 0;
        }
        else {
            return 1;
        }


}
