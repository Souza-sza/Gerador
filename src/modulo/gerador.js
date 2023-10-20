import ValidaCpf from './ValidaCpf'
export default class geraCpf{
  rand(max = 100000000, min = 999999999){
    return String(Math.floor(Math.random() * (max - min) + min))
  }
  formatado(cpf){
    return (
       cpf.slice(0,3) + '.' + 
       cpf.slice(3,6) + '.' + 
       cpf.slice(6,9) + '-' + 
       cpf.slice(9,11) 
    )
  }
  geraNovoCpf(){
    const cpfSemdigito = this.rand();
    const Digito1 = ValidaCpf.geraDigito(cpfSemdigito);
    const Digito2 = ValidaCpf.geraDigito(cpfSemdigito + Digito1);
    const novoCpf = cpfSemdigito + Digito1 + Digito2;
    return this.formatado(novoCpf);
  }
}