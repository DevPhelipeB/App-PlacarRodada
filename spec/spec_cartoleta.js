// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// **********************************************************************************
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// No livro digital página e no material web página 152 SA2 Etapa 2 página 100
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers




describe("Teste de validação valor_do_jogo ", function() {

  it("Valores Sorteio do Placar ", function() {

	//Com base nas opções de Matchers acima, complete os testes abaixo
	
	expect( sorteio() ).not.toBe (-1);  // NÃO PODE SER (toBe) para o valor apresentado entao uso NOT!
	
	expect( sorteio() ).not.toBe (5);	// NÃO PODE SER (toBe) para o valor apresentado entao uso NOT!
	
	expect( sorteio() ).not.toBe (6);  // NÃO PODE SER (toBe) para o valor apresentado entao uso NOT!
    
  });


});


describe("Teste de validação validar_pontos ", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(1,3) ).toBeTruthy ("Vitória do Time 2"); //PODE SER (toBe) para o valor apresentado pois ja atende! 

	expect( validar_pontos(3,1) ).toBeTruthy ("Vitória do Time 1"); //PODE SER (toBe) para o valor apresentado pois ja atende! 

	expect( validar_pontos(1,1) ).toBe ("Empate"); //PODE SER (toBe) para o valor apresentado pois ja atende! 
	
    
  });


});
 


describe("Teste de validação validar_pontos INVALIDOS", function() {

  it("Validar Campeões ", function() {

	expect( validar_pontos(3,1) ).not.toBe ("Vitória do Time 2");	// SE NÃO ESTAR DESSA FORMA VITORIA TIME 2
	
	expect( validar_pontos(1,3) ).not.toBe ("Vitória do Time 1");	// SE NÃO ESTAR DESSA FORMA VITORIA TIME 1
	
	expect( validar_pontos(3,1) ).not.toBeFalsy ("Empate");  // SE NÃO PODE ESTAR FALSO, VAI SER  EMPATE
	
    
  });


});