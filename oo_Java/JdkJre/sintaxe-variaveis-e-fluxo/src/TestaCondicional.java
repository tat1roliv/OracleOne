
public class TestaCondicional {

	public static void main(String[] args) {
		System.out.println("test condicionais");
		int idade = 16;
		int QuantPes = 3;
		if (idade >= 18) {
			System.out.println("maior de idade");
		} else {
			if (QuantPes >= 2) {
				System.out.println("menor de idade acompanhado");
			} else {
				System.out.println("menor de idade");
			}
		}
	}
}
