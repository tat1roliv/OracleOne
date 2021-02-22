
public class TestaCondicional2 {
	public static void main(String[] args) {
		System.out.println("test condicionais");
		int idade = 18;
		int QuantPessoas = 3;
		
		boolean acompanhado = QuantPessoas >= 2; //return true || false
		
		System.out.println("o valor de acompanhado é: "+ acompanhado );
		
		if (idade >= 18 && acompanhado) { 
			System.out.println("entra");
		} else {
			System.out.println("não entra");
		}
	}
}
