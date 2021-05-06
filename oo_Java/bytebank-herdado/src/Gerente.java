//bytebank-herdado

public class Gerente extends FuncionarioAutenticavel{//herda do func(classe)
	
	private int senha;
	
	public boolean autentica(int senha) {
		if(this.senha == senha) {
			return true;
		}else {
			return false;
		}
	}
	
	//bonificacao
	//reescrita de metodo do func
	//super => this da classe mae (o atributo esta definido na classe mae, nao na classe filha = nao usar this)
	
    public double getBonificacao() {
        return super.getSalario();
    }
	
	
	//setters and getters
	public int getSenha() {
		return senha;
	}

	public void setSenha(int senha) {
		this.senha = senha;
	}	
	
}
