
public class TestaContaSemCliente {

	public static void main(String[] args) {
		Conta contaUser2 = new Conta();
		System.out.println(contaUser2.getSaldo());
		
		contaUser2.titular = new Cliente();
		
		System.out.println(contaUser2.titular);
		
		contaUser2.titular.nome = "marcela";
		System.out.println(contaUser2.titular.nome);
	}
}
