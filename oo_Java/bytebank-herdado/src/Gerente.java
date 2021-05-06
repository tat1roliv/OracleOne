
public class Gerente extends Funcionario implements Autenticavel{//herda do func(classe)

	private int senha;
	
	//bonificacao
    public double getBonificacao() {
        return super.getSalario();
    }

	@Override
	public void setSenha(int senha) {
		this.senha = senha;
		
	}
	
	@Override
	public boolean autentica(int senha) {
		if(this.senha == senha) {
			return true;
		}
		return false;
	}
	
}
