
public class TestaContacExc {

	public static void main(String[] args) {
		Contac c = new Contac();
		
		try {
			c.deposita();
		} catch(MyException exception) {
			System.out.println("tratamento...");
		}
		
	}
}
