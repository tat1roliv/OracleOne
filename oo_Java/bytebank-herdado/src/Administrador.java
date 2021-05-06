
public class Administrador extends FuncionarioAutenticavel {
	
	private int senha;
	
	public void setSenha(int senha) {
		this.senha = senha;
	}
	
	public boolean autentica(int senha) {
		if(this.senha == senha) {
			return true;
		}else {
			return false;
		}
	}	
	

	@Override
	public double getBonificacao() {	
		return 50;
	}

}
