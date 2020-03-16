import java.lang.reflect.Array;
import java.util.ArrayList;

import javafx.scene.control.Menu;

class member{
    int a ;
    public static void main(String[] args) {
        member A= new member(); 
        System.out.print("Default int a:"+A.a);
        System.out.print(A.toString());
        Class cls1 = String.class;
        System.out.print(cls1);

    }
}

