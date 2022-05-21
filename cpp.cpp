#include <iostream>
#include <string>
using namespace std;

const int maxrow=10;
string b_title [maxrow]={};
string b_author[maxrow]={};
string b_isbn[maxrow]={};
string b_publisher[maxrow]={};
int counter;

void AddRecord() {
    char title[50];
    char author[20];
    char isbn[14];
    char publisher[30];

    cin.ignore();
    cout <<"\n| Book Author: ";
    cin.getline(author, 20);
    cout << "| Book Title: ";
    cin.getline(title, 50);
    cout << "| Publisher: ";
    cin.getline(publisher, 30);
    cout << "| ISBN: ";
    cin.getline(isbn, 14);
  

 for (int x = 0; x < maxrow; x++)
 {
    if(b_author[x] == "\0")
    {
        b_author[x] = author;
        b_title[x] = title;
        b_isbn[x] = isbn;
        b_publisher[x] = publisher;
        break;
    }
 }
}

void ListRecord()
{
 int counter = 0;
 int x;
cout << "Current Record(s)" <<endl;
    for (int x = 0; x < maxrow; x++)
    if (b_author[x] != "\0") {
    counter++;
    cout << " " << counter << ". "<<"Author: " << b_author[x]<<endl; 
    cout<< "    Book Title: " << b_title[x]<<endl;
    cout<<"    Publisher: "<<b_publisher[x]<< endl;
    cout<< "    ISBN: " << b_isbn[x]<<endl;
    }
    else if (counter==0) {
    cout << "\n No Record found!" << endl;
    break;
    }
   
}
void BubbleSort(){
        bool swapped;
        for(int x=0; x<maxrow; x++){
        if(b_author[x]!="\0"){
             for(int x=0;x<(maxrow-1);x++)
            {  swapped = false;
                for(int j=x+1; j<(maxrow-x-1); j++)
                {
                    if(b_title[j] > b_author[j+1])
                    {
                       swap(b_author[j], b_author[j+1]);
                        swapped = true;
    
                    }
                }    
            }
        }
         for(int x=0; x<maxrow; x++){
        if(swapped==false)
        break;
         }
            }
            for(int x=0; x<maxrow; x++){
             cout <<x+1<<". "<<b_title[x]<<endl;
        
}
}
void SortAuthor(){
        bool swapped;
        for(int x=0; x<maxrow; x++){
        if(b_title[x]!="\0"){
             for(int x=0;x<(maxrow-1);x++)
            {  swapped = false;
                for(int j=x+1; j<(maxrow-x-1); j++)
                {
                    if(b_title[j] > b_title[j+1])
                    {
                       swap(b_title[j], b_title[j+1]);
                        swapped = true;
    
                    }
                }    
            }
        }
         for(int x=0; x<maxrow; x++){
        if(swapped==false)
        break;
         }
            }
            for(int x=0; x<maxrow; x++){
             cout <<x+1<<". "<<b_title[x]<<endl;
        
}
}
void SearchRecord(string search)
{
   
   cout << " Current Record(s)" << endl<<endl;
   int counter = 0;
   for (int x = 0; x < maxrow; x++)            
   {   

      if (b_title[x] == search)
       {
      counter++;
         cout << " " << counter << ". "<<"Author: " << b_author[x]<<endl; 
         cout<< "    Book Title: " << b_title[x]<<endl;
         cout<<"    Publisher: "<<b_publisher[x]<< endl;
         cout<< "    ISBN: " << b_isbn[x]<<endl;
      break;
       }
    }
    
    if (counter == 0)
    {
    cout << "\n No Record found!" << endl;
    }
}
void DeleteRecord(string borrow)
{
    int x, j;
    int size = 10;
    int counter = 0;

    for (int x = 0; x < size; x++)
{
    if (b_title[x] == borrow)
    {
        for(j=x; j<(size-1); j++){
         b_title[j] = b_title[j+1];
         b_author[j] = b_author[j+1];
         b_isbn[j]=b_isbn[j+1];
        b_publisher[j]=b_publisher[j+1];
  
        }
        counter++;
        break;
    }
}
if (counter == 0)
{ 
    cout << "\n Book title does not exist!"<<endl;
    
}
else

        cout << "\n Successfully Borrowed!" << endl;
    }
int main()
{
    cout << "| MENU\n";
    int option;
    string search;
    string borrow;
    do{
    cout << "|===================================================================|" << endl;
    cout << "| 1-Insert book in the library" << endl;
    cout << "| 2-Display all book" << endl;
    cout << "| 3-Sorted list of Books " <<endl;
    cout << "| 3-Sorted list of Author " <<endl;
    cout << "| 4-Search book" << endl;
    cout << "| 5-Borrow book" <<endl;
    cout << "| 7-Exit" << endl;
    cout << "|===================================================================|" << endl;
    cout << "| Select option >> ";
    cin >> option;

    switch (option)
    {
    case 1: AddRecord();
    break;

    case 2: ListRecord();
   
    break;
    
    case 3:
    cout << "| Sorted List of Books using title: " << endl;
    BubbleSort();
    break;

    case 4:cin.ignore();
    cout << "| Searching for book using title" << endl;
    getline(cin, search);
    SearchRecord(search);
    break;
    
    case 5: cin.ignore();
    cout << "| Borrow by title >> " << endl;
    getline(cin, borrow);
    DeleteRecord(borrow);
    break;
    
    case 6:
    cout << "| Sorted List of Books using author: " << endl;
    SortAuthor();
    
    break;
    case 7:
    cout<<"Exit...."<<endl;
    return 0;
    
    default:
    cout << "| Invalid Entry!" << endl;
    return 0;
    }
  
    }while (option<6);
}