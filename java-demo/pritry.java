public class pritry {
    private int age;
    private String name;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        pritry p = new pritry();
        p.setAge(10);
        p.setName("博士");

        System.out.println(p.getAge() + "  " + p.getName());

    }
}
