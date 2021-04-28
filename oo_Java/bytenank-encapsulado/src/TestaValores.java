
public class TestaValores {
	
	public static void main(String[] args) {
		

		Conta conta = new Conta(1234, 24226);	
		
		System.out.println(conta.getAgencia());
		
		conta.setAgencia(123123123);
		
		Conta conta2 = new Conta(1337, 2563);
		Conta conta3 = new Conta(13447, 254443);
		
		System.out.println(conta2.getTotal());
		System.out.println(Conta.getTotal());
		
	}

}
