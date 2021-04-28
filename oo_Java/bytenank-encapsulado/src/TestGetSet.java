
public class TestGetSet {

	public static void main(String[] args) {
		
		Conta conta = new Conta();
		conta.setNumero(1337);
		System.out.println(conta.getNumero());
		
		Cliente paulo = new Cliente();
		paulo.setNome("paulo silva silveira junior");
		
		conta.setTitular(paulo);
		
		System.out.println(conta.getTitular().getNome());
		
		conta.getTitular().setProfissao("designer");
		
	}
	
}
