
public class TestaBanco {
	
	public static void main(String[] args) {
	
		Cliente userName = new Cliente();
		userName.nome = "paulo jose da silva silveira junior";
		userName.cpf = "222.222.222-22";
		userName.profissao = "programador";
		
		Conta contaUserName = new Conta();
		contaUserName.deposita(100);
		
		//associa o cliente à conta
		contaUserName.titular = userName;
		System.out.println(contaUserName.titular.nome);
		//System.out.println(contaUserName.titular); return Cliente@5ca881b5 (mesmo objeto)
		
	}
	
}
