//interface (nao pode ter nada concreto -> todos os metodos abstratos)

public abstract interface Autenticavel{
	
	public abstract void setSenha(int senha);
	
	public abstract boolean autentica(int senha);
	
}
