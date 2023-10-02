#  Exercícios Angular

Exercícios gerados pelo Chat GPT com base nas aulas de Angular da Trilha Fullstack Java Angular, do Bootcamp Santander 2023 

<br/>

<br/>

## Exercício 1: Criando um Componente Simples
Neste exercício, você deve criar um componente simples e usá-lo em um template.  
  
### **Saída Esperada:**
```
Este é o conteúdo do meu primeiro componente.
```

### **Exemplo de Entrada:**
```html
<app-meuprimeirocomponente></app-meuprimeirocomponente>
```


### **Solução:**

1. Use o Angular CLI para criar um novo componente com o comando:
   ```
   ng generate component meuprimeirocomponente
   ```

2. No arquivo de template do novo componente (`meuprimeirocomponente.component.html`), adicione o seguinte conteúdo:
   ```html
   Este é o conteúdo do meu primeiro componente.
   ```

3. No template onde deseja usar o componente (por exemplo, `app.component.html`), adicione a tag `<app-meuprimeirocomponente></app-meuprimeirocomponente>`.


<br/>

## Exercício 2: Passando Dados para um Componente
Neste exercício, você deve criar um componente que aceita um valor como entrada e o exibe em seu template.

### **Saída Esperada:**
```
Olá, John Doe!
```

### **Exemplo de Entrada:**
```html
<app-saudacao [nome]="'John Doe'"></app-saudacao>
```


### **Solução:**

1. Use o Angular CLI para criar um novo componente chamado `saudacao` com o comando:
   ```
   ng generate component saudacao
   ```

2. No arquivo `saudacao.component.ts`, defina uma propriedade de entrada chamada `nome` usando o decorador `@Input()`:
   ```typescript
   @Input() nome: string = '';
   ```

3. No template do componente `saudacao`, exiba o valor de `nome`:
   ```html
   Olá, {{ nome }}!
   ```

4. No template onde deseja usar o componente `saudacao`, passe um valor para a propriedade `nome` usando a sintaxe `[nome]="'Valor'"`.  
O valor deve ser passado entre as simples porque se trata de uma string. `"'value here'"`

<br/>

## Exercício 3: Emissão de Eventos a partir de um Componente
Neste exercício, você deve criar um componente que emite um evento quando um botão é clicado.

**Saída Esperada (quando o botão é clicado):**
```
Botão Clicado no Componente!
```

### **Exemplo de Entrada:**
```html
<app-botao (botaoClicado)="exibirMensagem()"></app-botao>
```


### **Solução:**

1. Use o Angular CLI para criar um novo componente chamado `botao` com o comando:
   ```
   ng generate component botao
   ```

2. No arquivo `botao.component.ts`, defina um evento de saída chamado `botaoClicado` usando o decorador `@Output()` e `EventEmitter`:
   ```typescript
   @Output() botaoClicado = new EventEmitter<void>();
   ```

3. No arquivo `botao.component.html`, crie um botão e adicione um evento de clique que aciona a emissão do evento `botaoClicado`:
   ```html
   <button (click)="emitirEvento()">Clique Aqui</button>
   ```

4. No arquivo `botao.component.ts`, adicione o método `emitirEvento()` que emite o evento `botaoClicado`:
   ```typescript
   emitirEvento() {
     this.botaoClicado.emit();
   }
   ```

5. No template onde deseja usar o componente `botao`, ouça o evento `botaoClicado` e execute uma função quando o evento for disparado.

<br/>

## Exercício 4: Componente de Lista de Itens
Neste exercício, você deve criar um componente que recebe uma lista de itens como entrada e os exibe em uma lista no template.

### **Saída Esperada:**
```
Itens:
- Item 1
- Item 2
- Item 3
```

### **Exemplo de Entrada:**
```html
<app-lista-itens [itens]="['Item 1', 'Item 2', 'Item 3']"></app-lista-itens>
```


### **Solução:**

1. Use o Angular CLI para criar um novo componente chamado `lista-itens` com o comando:
   ```
   ng generate component lista-itens
   ```

2. No arquivo `lista-itens.component.ts`, defina uma propriedade de entrada chamada `itens` usando o decorador `@Input()`:
   ```typescript
   @Input() itens: string[];
   ```

3. No template do componente `lista-itens`, use uma estrutura de repetição (por exemplo, `ngFor`) para exibir os itens em uma lista:
   ```html
   <p>Itens:</p>
   <ul>
     <li *ngFor="let item of itens">{{ item }}</li>
   </ul>
   ```

4. No template onde deseja usar o componente `lista-itens`, passe um array de itens para a propriedade `itens`.

<br/>

## Exercício 5: Componente de Contador
Neste exercício, você deve criar um componente de contador que aceita um valor inicial como entrada e permite incrementar e decrementar a contagem.

### **Saída Esperada:**
```
Contagem: 5
```

### **Exemplo de Entrada:**
```html
<app-contador [valor]="5"></app-contador>
```


### **Solução:**

1. Use o Angular CLI para criar um novo componente chamado `contador` com o comando:
   ```
   ng generate component contador
   ```

2. No arquivo `contador.component.ts`, defina uma propriedade de entrada chamada `valor` usando o decorador `@Input()`:
   ```typescript
   @Input() valor: number;
   ```

3. No template do componente `contador`, exiba o valor e adicione botões para incrementar e decrementar a contagem:
   ```html
   <p>Contagem: {{ valor }}</p>
   <button (click)="incrementar()">Incrementar</button>
   <button (click)="decrementar()">Decrementar</button>
   ```

4. No arquivo `contador.component.ts`, adicione os métodos `incrementar()` e `decrementar()` que atualizam o valor da contagem:
   ```typescript
   incrementar() {
     this.valor++;
   }

   decrementar() {
     this.valor--;
   }
   ```

5. No template onde deseja usar o componente `contador`, passe um valor inicial para a propriedade `valor`.




<br/>

## Exercício 6: Interpolação de Dados com Expressões
Neste exercício, você deve criar um componente que realiza uma operação matemática simples e exibe o resultado usando a interpolação de dados.

### **Saída Esperada:**
```
A soma de 5 e 3 é igual a 8.
```

### **Exemplo de Entrada:**
```html
<p>A soma de {{ numero1 }} e {{ numero2 }} é igual a {{ numero1 + numero2 }}.</p>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component calculadora
   ```

2. No arquivo `calculadora.component.ts`, defina duas propriedades chamadas `numero1` e `numero2` e atribua valores numéricos a elas:
   ```typescript
   numero1 = 5;
   numero2 = 3;
   ```

3. No template do componente `calculadora`, use a interpolação de dados para exibir a soma dos números e a mensagem correspondente:
   ```html
   <p>A soma de {{ numero1 }} e {{ numero2 }} é igual a {{ numero1 + numero2 }}.</p>
   ```

<br/>

## Exercício 7: Interpolação de Dados com Eventos
Neste exercício, você deve criar um componente que permite que o usuário clique em um botão para incrementar uma contagem e exibir o resultado usando a interpolação de dados.

### **Saída Esperada:**
```
Você clicou 0 vezes.
```

### **Exemplo de Entrada:**
```html
<button (click)="incrementarContagem()">Clique Aqui</button>
<p>Você clicou {{ contagem }} vezes.</p>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component contador
   ```

2. No arquivo `contador.component.ts`, defina uma propriedade chamada `contagem` e atribua o valor inicial `0` a ela:
   ```typescript
   contagem = 0;
   ```

3. No template do componente `contador`, crie um botão que chama o método `incrementarContagem()` quando clicado e exibe a contagem atual usando a interpolação de dados:
   ```html
   <button (click)="incrementarContagem()">Clique Aqui</button>
   <p>Você clicou {{ contagem }} vezes.</p>
   ```

4. No arquivo `contador.component.ts`, adicione o método `incrementarContagem()` que incrementa o valor da propriedade `contagem`:
   ```typescript
   incrementarContagem() {
     this.contagem++;
   }
   ```


<br/>

## Exercício 8: Checkbox com Two-Way Binding
Neste exercício, você deve criar uma caixa de seleção (checkbox) que mantém seu estado em sincronia com uma variável no componente usando Two-Way Binding.

### **Saída Esperada:**
```
Estado Atual: [true/false]
```

### **Exemplo de Entrada:**
```html
<input type="checkbox" [(ngModel)]="isChecked">
<p>Estado Atual: {{ isChecked }}</p>
```


### **Solução:**

1. Certifique-se de que você tenha importado `FormsModule` em seu módulo (normalmente `app.module.ts`) para usar o Two-Way Binding. Importe-o da seguinte forma:
   ```typescript
   import { FormsModule } from '@angular/forms';
   ```

2. No arquivo `meu-componente.component.ts`, declare a variável `isChecked` e atribua um valor inicial a ela (por exemplo, `true` ou `false`):
   ```typescript
   isChecked = true;
   ```

3. No arquivo `meu-componente.component.html`, use o Two-Way Binding com `[(ngModel)]` para vincular o estado da caixa de seleção à variável `isChecked`:
   ```html
   <input type="checkbox" [(ngModel)]="isChecked">
   <p>Estado Atual: {{ isChecked }}</p>
   ```

<br/>

## Exercício 9: Bind de Valor Selecionado em um Dropdown
  Neste exercício, você deve criar um dropdown que mantém a opção selecionada em sincronia com uma variável no componente usando Two-Way Binding.

### **Saída Esperada:**
```
Opção Selecionada: [Valor Selecionado]
```

### **Exemplo de Entrada:**
```html
<select [(ngModel)]="selectedOption">
  <option value="opcao1">Opção 1</option>
  <option value="opcao2">Opção 2</option>
  <option value="opcao3">Opção 3</option>
</select>
<p>Opção Selecionada: {{ selectedOption }}</p>
```


### **Solução:**

1. Certifique-se de que você tenha importado `FormsModule` em seu módulo (normalmente `app.module.ts`) para usar o Two-Way Binding. Importe-o da seguinte forma:
   ```typescript
   import { FormsModule } from '@angular/forms';
   ```

2. No arquivo `meu-componente.component.ts`, declare a variável `selectedOption` e atribua um valor inicial a ela (por exemplo, `"opcao1"`, correspondendo ao valor da primeira opção no dropdown):
   ```typescript
   selectedOption = "opcao1";
   ```

3. No arquivo `meu-componente.component.html`, use o Two-Way Binding com `[(ngModel)]` para vincular a opção selecionada no dropdown à variável `selectedOption`:
   ```html
   <select [(ngModel)]="selectedOption">
     <option value="opcao1">Opção 1</option>
     <option value="opcao2">Opção 2</option>
     <option value="opcao3">Opção 3</option>
   </select>
   <p>Opção Selecionada: {{ selectedOption }}</p>
   ```

<br/>

## Exercício 10: Two-Way Binding com Radio Buttons
Neste exercício, você deve criar um grupo de radio buttons que mantém a opção selecionada em sincronia com uma variável no componente usando Two-Way Binding.

### **Saída Esperada:**
```
Opção Selecionada: [Valor Selecionado]
```

### **Exemplo de Entrada:**
```html
<input type="radio" name="opcao" value="opcao1" [(ngModel)]="selectedOption">
<input type="radio" name="opcao" value="opcao2" [(ngModel)]="selectedOption">
<input type="radio" name="opcao" value="opcao3" [(ngModel)]="selectedOption">
<p>Opção Selecionada: {{ selectedOption }}</p>
```


### **Solução:**

1. Certifique-se de que você tenha importado `FormsModule` em seu módulo (normalmente `app.module.ts`) para usar o Two-Way Binding. Importe-o da seguinte forma:
   ```typescript
   import { FormsModule } from '@angular/forms';
   ```

2. No arquivo `meu-componente.component.ts`, declare a variável `selectedOption` e atribua um valor inicial a ela (por exemplo, `"opcao1"` para selecionar a primeira opção):
   ```typescript
   selectedOption = "opcao1";
   ```

3. No arquivo `meu-componente.component.html`, use o Two-Way Binding com `[(ngModel)]` para vincular o valor selecionado dos radio buttons à variável `selectedOption`. Certifique-se de que todos os radio buttons tenham o mesmo atributo `name` para formar um grupo:
   ```html
   <input type="radio" name="opcao" value="opcao1" [(ngModel)]="selectedOption">
   <input type="radio" name="opcao" value="opcao2" [(ngModel)]="selectedOption">
   <input type="radio" name="opcao" value="opcao3" [(ngModel)]="selectedOption">
   <p>Opção Selecionada: {{ selectedOption }}</p>
   ```

<br/>

## Exercício 11: Two-Way Binding com Texto em Textarea
Neste exercício, você deve criar um campo de texto em formato de textarea que mantém seu valor em sincronia com uma variável no componente usando Two-Way Binding.

### **Saída Esperada:**
```
Texto Atual:
[Texto no Textarea]
```

### **Exemplo de Entrada:**
```

html
<textarea [(ngModel)]="textareaValue"></textarea>
<p>Texto Atual:</p>
<pre>{{ textareaValue }}</pre>
```


### **Solução:**

1. Certifique-se de que você tenha importado `FormsModule` em seu módulo (normalmente `app.module.ts`) para usar o Two-Way Binding. Importe-o da seguinte forma:
   ```typescript
   import { FormsModule } from '@angular/forms';
   ```

2. No arquivo `meu-componente.component.ts`, declare a variável `textareaValue` e atribua um valor inicial a ela (por exemplo, uma string de texto):
   ```typescript
   textareaValue = "Texto Inicial";
   ```

3. No arquivo `meu-componente.component.html`, use o Two-Way Binding com `[(ngModel)]` para vincular o valor do textarea à variável `textareaValue`:
   ```html
   <textarea [(ngModel)]="textareaValue"></textarea>
   <p>Texto Atual:</p>
   <pre>{{ textareaValue }}</pre>
   ```


<br/>

## Exercício 12: Estilo de Fundo Condicional
  Neste exercício, você deve criar um parágrafo com estilo de fundo condicional usando vinculação de estilos.

**Saída Esperada (quando `destacarFundo` for verdadeiro):**
```
Este parágrafo tem um fundo amarelo.
```

**Saída Esperada (quando `destacarFundo` for falso):**
```
Este parágrafo não tem destaque de fundo.
```

### **Exemplo de Entrada:**
```html
<p [style.background-color]="destacarFundo ? 'yellow' : 'transparent'">
  {{ destacarFundo ? 'Este parágrafo tem um fundo amarelo.' : 'Este parágrafo não tem destaque de fundo.' }}
</p>
<button (click)="alternarDestaque()">Alternar Destaque de Fundo</button>
```


### **Solução:**

1. No arquivo `meu-componente.component.ts`, declare a variável `destacarFundo` e atribua o valor inicial `false` a ela:
   ```typescript
   destacarFundo = false;
   ```

2. No arquivo `meu-componente.component.html`, use a vinculação de estilos `[style.background-color]` para definir a cor de fundo do parágrafo com base no valor de `destacarFundo`:
   ```html
   <p [style.background-color]="destacarFundo ? 'yellow' : 'transparent'">
     {{ destacarFundo ? 'Este parágrafo tem um fundo amarelo.' : 'Este parágrafo não tem destaque de fundo.' }}
   </p>
   <button (click)="alternarDestaque()">Alternar Destaque de Fundo</button>
   ```

3. No arquivo `meu-componente.component.ts`, adicione um método `alternarDestaque()` que alterna o valor de `destacarFundo` entre `true` e `false`:
   ```typescript
   alternarDestaque() {
     this.destacarFundo = !this.destacarFundo;
   }
   ```

<br/>

## Exercício 13: Vinculação de Classe de Estilo
  Neste exercício, você deve criar um parágrafo que aplica uma classe de estilo de forma condicional usando vinculação de classe.

**Saída Esperada (quando `usarClasse` for verdadeiro):**
```
Este parágrafo tem uma classe de estilo aplicada.
```

**Saída Esperada (quando `usarClasse` for falso):**
```
Este parágrafo não tem classe de estilo.
```

### **Exemplo de Entrada:**
```html
<p [class.estiloDestaque]="usarClasse">
  {{ usarClasse ? 'Este parágrafo tem uma classe de estilo aplicada.' : 'Este parágrafo não tem classe de estilo.' }}
</p>
<button (click)="alternarClasse()">Alternar Classe de Estilo</button>
```


### **Solução:**

1. No arquivo `meu-componente.component.ts`, declare a variável `usarClasse` e atribua o valor inicial `false` a ela:
   ```typescript
   usarClasse = false;
   ```

2. No arquivo `meu-componente.component.html`, use a vinculação de classe `[class.estiloDestaque]` para aplicar ou remover a classe `estiloDestaque` do parágrafo com base no valor de `usarClasse`:
   ```html
   <p [class.estiloDestaque]="usarClasse">
     {{ usarClasse ? 'Este parágrafo tem uma classe de estilo aplicada.' : 'Este parágrafo não tem classe de estilo.' }}
   </p>
   <button (click)="alternarClasse()">Alternar Classe de Estilo</button>
   ```

3. No arquivo `meu-componente.component.ts`, adicione um método `alternarClasse()` que alterna o valor de `usarClasse` entre `true` e `false`:
   ```typescript
   alternarClasse() {
     this.usarClasse = !this.usarClasse;
   }
   ```


<br/>

## Exercício 14: Inicialização de Dados no `OnInit`
Neste exercício, você deve criar um componente que inicializa uma mensagem de boas-vindas no método `ngOnInit`.

### **Saída Esperada:**
```
Bem-vindo, Usuário!
```

### **Exemplo de Entrada:**
```html
<p>{{ mensagem }}</p>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component saudacao
   ```

2. No arquivo `saudacao.component.ts`, implemente a interface `OnInit` e defina a propriedade `mensagem`:
   ```typescript
   import { OnInit } from '@angular/core';

   export class SaudacaoComponent implements OnInit {
     mensagem: string;

     ngOnInit() {
       this.mensagem = 'Bem-vindo, Usuário!';
     }
   }
   ```

3. No template do componente `saudacao`, use a propriedade `mensagem` para exibir a mensagem de boas-vindas:
   ```html
   <p>{{ mensagem }}</p>
   ```

<br/>

## Exercício 15: Detecção de Mudanças em `@Input` com `OnChanges`
Neste exercício, você deve criar um componente que detecta mudanças em uma propriedade de entrada usando o `OnChanges` e exibe o valor atual e o valor anterior.

### **Saída Esperada:**
```
Valor Atual: 5
Valor Anterior: 3
```

### **Exemplo de Entrada:**
```html
<app-valor-atual [valor]="5"></app-valor-atual>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component valor-atual
   ```

2. No arquivo `valor-atual.component.ts`, importe `OnChanges` e implemente a interface `OnChanges`. Defina uma propriedade de entrada `@Input()` chamada `valor`:
   ```typescript
   import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

   export class ValorAtualComponent implements OnChanges {
     @Input() valor: number;

     ngOnChanges(changes: SimpleChanges) {
       const valorAnterior = changes.valor.previousValue;
       const valorAtual = changes.valor.currentValue;
       console.log(`Valor Atual: ${valorAtual}`);
       console.log(`Valor Anterior: ${valorAnterior}`);
     }
   }
   ```

3. No template do componente `valor-atual`, não é necessário exibir nada.

4. No template onde deseja usar o componente `valor-atual`, passe um valor para a propriedade `valor` usando a interpolação de dados.

<br/>

## Exercício 16: Detecção de Mudanças em um Objeto com `OnChanges`
Neste exercício, você deve criar um componente que detecta mudanças em um objeto de entrada usando o `OnChanges` e exibe os valores do objeto.

### **Saída Esperada:**
```
Nome: John Doe
Idade: 30
```

### **Exemplo de Entrada:**
```html
<app-pessoa [pessoa]="{ nome: 'John Doe', idade: 30 }"></app-pessoa>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component pessoa
   ```

2. No arquivo `pessoa.component.ts`, importe `OnChanges` e implemente a interface `OnChanges`. Defina uma propriedade de entrada `@Input()` chamada `pessoa`:
   ```typescript
   import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

   export class PessoaComponent implements OnChanges {
     @Input() pessoa: any;

     ngOnChanges(changes: SimpleChanges) {
       const pessoaAtual = changes.pessoa.currentValue;
       console.log(`Nome: ${pessoaAtual.nome}`);
       console.log(`Idade: ${pessoaAtual.idade}`);
     }
   }
   ```

3. No template do componente `pessoa`, não é necessário exibir nada.

4. No template onde deseja usar o componente `pessoa`, passe um objeto de pessoa para a propriedade `pessoa` usando a interpolação de dados.


<br/>

## Exercício 17: Detecção de Mudanças com `DoCheck`
Neste exercício, você deve criar um componente que detecta mudanças em uma propriedade de entrada usando o `DoCheck` e exibe o valor atual e o valor anterior.

### **Saída Esperada:**
```
Valor Atual: 5
Valor Anterior: 3
```

### **Exemplo de Entrada:**
```html
<app-valor-atual [valor]="5"></app-valor-atual>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component valor-atual
   ```

2. No arquivo `valor-atual.component.ts`, implemente a interface `DoCheck` e defina uma propriedade de entrada `@Input()` chamada `valor`:
   ```typescript
   import { Component, Input, DoCheck } from '@angular/core';

   export class ValorAtualComponent implements DoCheck {
     @Input() valor: number;
     valorAnterior: number;

     ngDoCheck() {
       if (this.valor !== this.valorAnterior) {
         this.valorAnterior = this.valor;
         console.log(`Valor Atual: ${this.valor}`);
         console.log(`Valor Anterior: ${this.valorAnterior}`);
       }
     }
   }
   ```

3. No template do componente `valor-atual`, não é necessário exibir nada.

4. No template onde deseja usar o componente `valor-atual`, passe um valor para a propriedade `valor` usando a interpolação de dados.

<br/>

## Exercício 18: Uso do `ngAfterContentInit` com ng-content Dinâmico
  Neste exercício, você deve criar um componente que utiliza o `ngAfterContentInit` para exibir o conteúdo inicial, que é passado através de `ng-content`.

### **Saída Esperada:**
```
Conteúdo Inicial: Este é o conteúdo inicial.
```

### **Exemplo de Entrada:**
```html
<app-conteudo-dinamico>
  <p>Este é o conteúdo inicial.</p>
</app-conteudo-dinamico>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component conteudo-dinamico
   ```

2. No arquivo `conteudo-dinamico.component.ts`, implemente a interface `AfterContentInit`. Não é necessário definir propriedades de entrada ou saída para este exercício.

3. No método `ngAfterContentInit`, acesse o conteúdo inicial usando o seletor `ng-content` e exiba-o:
   ```typescript
   import { AfterContentInit, Component } from '@angular/core';

   @Component({
     selector: 'app-conteudo-dinamico',
     template: `<ng-content></ng-content>`
   })
   export class ConteudoDinamicoComponent implements AfterContentInit {
     ngAfterContentInit() {
       const conteudoInicial = document.querySelector('app-conteudo-dinamico').textContent;
       console.log(`Conteúdo Inicial: ${conteudoInicial}`);
     }
   }
   ```

4. No template onde deseja usar o componente `conteudo-dinamico`, insira o conteúdo desejado entre as tags do componente.

Esses exercícios ajudarão você a praticar o uso do `ngAfterContentInit` para interagir com o conteúdo inserido dinamicamente em componentes Angular.


<br/>

## Exercício 19: Uso de `ngAfterContentChecked`
Neste exercício, você deve criar um componente que utiliza o método `ngAfterContentChecked` para contar o número de vezes que ele é chamado.

### **Saída Esperada:**
```
Número de Verificações de Conteúdo: 2
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component contador-conteudo
   ```

2. No arquivo `contador-conteudo.component.ts`, importe `AfterContentChecked` e implemente a interface `AfterContentChecked`. Não é necessário definir propriedades de entrada ou saída para este exercício.

3. No componente, defina uma variável para acompanhar o número de verificações de conteúdo e incremente-a no método `ngAfterContentChecked`:
   ```typescript
   import { AfterContentChecked, Component } from '@angular/core';

   @Component({
     selector: 'app-contador-conteudo',
     template: `Número de Verificações de Conteúdo: {{ contador }}`
   })
   export class ContadorConteudoComponent implements AfterContentChecked {
     contador = 0;

     ngAfterContentChecked() {
       this.contador++;
     }
   }
   ```

<br/>

## Exercício 20: Uso de `ngAfterViewInit`
Neste exercício, você deve criar um componente que utiliza o método `ngAfterViewInit` para sinalizar quando o componente foi inicializado.

### **Saída Esperada:**
```
Componente Inicializado!
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component inicializacao
   ```

2. No arquivo `inicializacao.component.ts`, importe `AfterViewInit` e implemente a interface `AfterViewInit`. Não é necessário definir propriedades de entrada ou saída para este exercício.

3. No componente, exiba uma mensagem no método `ngAfterViewInit` para indicar que o componente foi inicializado:
   ```typescript
   import { AfterViewInit, Component } from '@angular/core';

   @Component({
     selector: 'app-inicializacao',
     template: `{{ mensagem }}`
   })
   export class InicializacaoComponent implements AfterViewInit {
     mensagem = '';

     ngAfterViewInit() {
       this.mensagem = 'Componente Inicializado!';
     }
   }
   ```

<br/>

## Exercício 21: Uso de `ngAfterViewChecked`
Neste exercício, você deve criar um componente que utiliza o método `ngAfterViewChecked` para contar o número de vezes que ele é chamado.

### **Saída Esperada:**
```
Número de Verificações de Visualização: 2
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component contador-visualizacao
   ```

2. No arquivo `contador-visualizacao.component.ts`, importe `AfterViewChecked` e implemente a interface `AfterViewChecked`. Não é necessário definir propriedades de entrada ou saída para este exercício.

3. No componente, defina uma variável para acompanhar o número de verificações de visualização e incremente-a no método `ngAfterViewChecked`:
   ```typescript
   import { AfterViewChecked, Component } from '@angular/core';

   @Component({
     selector: 'app-contador-visualizacao',
     template: `Número de Verificações de Visualização: {{ contador }}`
   })
   export class ContadorVisualizacaoComponent implements AfterViewChecked {
     contador = 0;

     ngAfterViewChecked() {
       this.contador++;
     }
   }
   ```

<br/>

## Exercício 22: Uso de `OnDestroy`
Neste exercício, você deve criar um componente que utiliza o método `OnDestroy` para sinalizar quando o componente está prestes a ser destruído.

### **Saída Esperada:**
```
Componente Destruido!
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component destruicao
   ```

2. No arquivo `destruicao.component.ts`, importe `OnDestroy` e implemente a interface `OnDestroy`. Não é necessário definir propriedades de entrada ou saída para este exercício.

3. No componente, exiba uma mensagem no método `ngOnDestroy` para indicar que o componente está sendo destruído:
   ```typescript
   import { Component, OnDestroy } from '@angular/core';

   @Component({
     selector: 'app-destruicao',
     template: `{{ mensagem }}`
   })
   export class DestruicaoComponent implements OnDestroy {
     mensagem = '';

     ngOnDestroy() {
       this.mensagem = 'Componente Destruido!';
     }
   }
   ```

<br/>

## Exercício 23: Uso Básico do `*ngIf`
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngIf` para exibir um parágrafo condicionalmente com base em uma condição.

### **Saída Esperada:**
```
O número é maior que 5.
```

### **Exemplo de Entrada:**
```html
<p *ngIf="numero > 5">O número é maior que 5.</p>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component condicional-basico
   ```

2. No arquivo `condicional-basico.component.ts`, defina uma propriedade `numero` com um valor:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-condicional-basico',
     template: `<p *ngIf="numero > 5">O número é maior que 5.</p>`
   })
   export class CondicionalBasicoComponent {
     numero = 7;
   }
   ```

<br/>

## Exercício 24: Uso de `*ngIf` com `else`
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngIf` com `else` para exibir um parágrafo condicionalmente com base em uma condição e fornecer uma saída alternativa caso a condição não seja atendida.

### **Saída Esperada:**
```
O número é menor ou igual a 5.
```

### **Exemplo de Entrada:**
```html
<p *ngIf="numero > 5; else elseBlock">O número é maior que 5.</p>
<ng-template #elseBlock><p>O número é menor ou igual a 5.</p></ng-template>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component condicional-else
   ```

2. No arquivo `condicional-else.component.ts`, defina uma propriedade `numero` com um valor:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-condicional-else',
     template: `
       <p *ngIf="numero > 5; else elseBlock">O número é maior que 5.</p>
       <ng-template #elseBlock><p>O número é menor ou igual a 5.</p></ng-template>
     `
   })
   export class CondicionalElseComponent {
     numero = 3;
   }
   ```

<br/>

## Exercício 25: Uso de `*ngIf` com Template Externo
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngIf` para decidir qual template externo será renderizado.

### **Saída Esperada:**
```
Conteúdo Condicionado: Este é o conteúdo condicionado.
```

### **Exemplo de Entrada:**
```html
<ng-container *ngIf="mostrarConteudo; then conteudoBlock else elseBlock"></ng-container>
<ng-template #conteudoBlock><p>Conteúdo Condicionado: Este é o conteúdo condicionado.</p></ng-template>
<ng-template #elseBlock><p>Conteúdo Alternativo: Este é o conteúdo alternativo.</p></ng-template>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component condicional-externo
   ```

2. No arquivo `condicional-externo.component.ts`, defina uma propriedade `mostrarConteudo` com um valor booleano:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-condicional-externo',
     template: `
       <ng-container *ngIf="mostrarConteudo; then conteudoBlock else elseBlock"></ng-container>
       <ng-template #conteudoBlock><p>Conteúdo Condicionado: Este é o conteúdo condicionado.</p></ng-template>
       <ng-template #elseBlock><p>Conteúdo Alternativo: Este é o conteúdo alternativo.</p></ng-template>
     `
   })
   export class CondicionalExternoComponent {
     mostrarConteudo = true;
   }
   ```

<br/>

## Exercício 26: Uso de `*ngIf` com Observável
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngIf` para exibir um botão condicionalmente com base em um valor de um Observável.

### **Saída Esperada:**
```
O botão está visível.
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component condicional-observavel
   ```

2. No arquivo `condicional-observavel.component.ts`, importe `Observable` e `of` do RxJS, e defina uma propriedade `exibirBotao` como um Observável que emite um valor booleano:
   ```typescript
   import { Component } from '@angular/core';
   import { Observable, of } from 'rxjs';

   @Component({
     selector: 'app-condicional-observavel',
     template: `
       <button *ngIf="exibirBotao | async">O botão está visível.</button>
     `
   })
   export class CondicionalObservavelComponent {
     exibirBotao: Observable<boolean> = of(true);
   }

<br/>
   ```
## Exercício 27: Uso Básico do `*ngFor` com Array de Números
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngFor` para iterar por um array de números e exibir cada número em uma div separada.

### **Saída Esperada:**
```
1
2
3
4
5
```

### **Exemplo de Entrada:**
```html
<div *ngFor="let numero of numeros">{{ numero }}</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component iteracao-basica
   ```

2. No arquivo `iteracao-basica.component.ts`, defina uma propriedade `numeros` como um array de números:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-iteracao-basica',
     template: `<div *ngFor="let numero of numeros">{{ numero }}</div>`
   })
   export class IteracaoBasicaComponent {
     numeros = [1, 2, 3, 4, 5];
   }
   ```

<br/>

## Exercício 28: Uso de `*ngFor` com Objetos em um Array
  Neste exercício, você deve criar um componente que utiliza a diretiva `*ngFor` para iterar por um array de objetos de pessoa e exibir as informações de cada pessoa em uma div separada.

### **Saída Esperada:**
```
Nome: Alice, Idade: 25
Nome: Bob, Idade: 30
Nome: Carol, Idade: 35
```

### **Exemplo de Entrada:**
```html
<div *ngFor="let pessoa of pessoas">
  Nome: {{ pessoa.nome }}, Idade: {{ pessoa.idade }}
</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component iteracao-objetos
   ```

2. No arquivo `iteracao-objetos.component.ts`, defina uma propriedade `pessoas` como um array de objetos de pessoa:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-iteracao-objetos',
     template: `
       <div *ngFor="let pessoa of pessoas">
         Nome: {{ pessoa.nome }}, Idade: {{ pessoa.idade }}
       </div>
     `
   })
   export class IteracaoObjetosComponent {
     pessoas = [
       { nome: 'Alice', idade: 25 },
       { nome: 'Bob', idade: 30 },
       { nome: 'Carol', idade: 35 }
     ];
   }
   ```

<br/>

## Exercício 29: Uso de `*ngFor` com Índice
Neste exercício, você deve criar um componente que utiliza a diretiva `*ngFor` para iterar por um array de itens e exibir o índice de cada item na lista.

### **Saída Esperada:**
```
1. Item 1
2. Item 2
3. Item 3
```

### **Exemplo de Entrada:**
```html
<div *ngFor="let item of itens; let i = index">{{ i + 1 }}. {{ item }}</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component iteracao-indice
   ```

2. No arquivo `iteracao-indice.component.ts`, defina uma propriedade `itens` como um array de strings:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-iteracao-indice',
     template: `
       <div *ngFor="let item of itens; let i = index">
         {{ i + 1 }}. {{ item }}
       </div>
     `
   })
   export class IteracaoIndiceComponent {
     itens = ['Item 1', 'Item 2', 'Item 3'];
   }
   ```

<br/>

## Exercício 30: Uso de `*ngFor` com Filtro
  Neste exercício, você deve criar um componente que utiliza a diretiva `*ngFor` para iterar por um array de objetos de pessoa e exibir informações de pessoas com índices pares.

### **Saída Esperada:**
```
Nome: Alice, Idade: 25
Nome: Carol, Idade: 35
```

### **Exemplo de Entrada:**
```html
<div *ngFor="let pessoa of pessoas; let i = index">
  <div *ngIf="i % 2 === 0">
    Nome: {{ pessoa.nome }}, Idade: {{ pessoa.idade }}
  </div>
</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component iteracao-filtro
   ```

2. No arquivo `iteracao-filtro.component.ts`, defina uma propriedade `pessoas` como um array de objetos de pessoa:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-iteracao-filtro',
     template: `
       <div *ngFor="let pessoa of pessoas; let i = index">
         <div *ngIf="i % 2 === 0">
           Nome: {{ pessoa.nome }}, Idade: {{ pessoa.idade }}
         </div>
       </div>
     `
   })
   export class IteracaoFiltroComponent {
     pessoas = [
       { nome: 'Alice', idade: 25 },
       { nome: 'Bob', idade: 30 },
       { nome: 'Carol', idade: 35 }
     ];
   }
   ```

<br/>

## Exercício 31: Uso Básico do `ngSwitch` com Variável
  Neste exercício, você deve criar um componente que utiliza a diretiva `ngSwitch` para exibir um parágrafo condicionalmente com base em uma variável `opcao`.

### **Saída Esperada:**
```
Opção 1 selecionada.
```

### **Exemplo de Entrada:**
```html
<div [ngSwitch]="opcao">
  <p *ngSwitchCase="1">Opção 1 selecionada.</p>
  <p *ngSwitchCase="2">Opção 2 selecionada.</p>
  <p *ngSwitchDefault>Nenhuma opção selecionada.</p>
</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component switch-basico
   ```

2. No arquivo `switch-basico.component.ts`, defina uma propriedade `opcao` com um valor:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-switch-basico',
     template: `
       <div [ngSwitch]="opcao">
         <p *ngSwitchCase="1">Opção 1 selecionada.</p>
         <p *ngSwitchCase="2">Opção 2 selecionada.</p>
         <p *ngSwitchDefault>Nenhuma opção selecionada.</p>
       </div>
     `
   })
   export class SwitchBasicoComponent {
     opcao = 1;
   }
   ```

<br/>

## Exercício 32: Uso de `ngSwitch` com Expressões
  Neste exercício, você deve criar um componente que utiliza a diretiva `ngSwitch` para exibir uma saudação condicionalmente com base em uma expressão `periodo`.

### **Saída Esperada:**
```
Boa noite!
```

### **Exemplo de Entrada:**
```html
<div [ngSwitch]="periodo">
  <p *ngSwitchCase="'manha'">Bom dia!</p>
  <p *ngSwitchCase="'tarde'">Boa tarde!</p>
  <p *ngSwitchCase="'noite'">Boa noite!</p>
  <p *ngSwitchDefault>Saudações desconhecidas.</p>
</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component switch-expressao
   ```

2. No arquivo `switch-expressao.component.ts`, defina uma propriedade `periodo` com um valor de string correspondente a um período do dia:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-switch-expressao',
     template: `
       <div [ngSwitch]="periodo">


         <p *ngSwitchCase="'manha'">Bom dia!</p>
         <p *ngSwitchCase="'tarde'">Boa tarde!</p>
         <p *ngSwitchCase="'noite'">Boa noite!</p>
         <p *ngSwitchDefault>Saudações desconhecidas.</p>
       </div>
     `
   })
   export class SwitchExpressaoComponent {
     periodo = 'noite';
   }
   ```

<br/>

## Exercício 33: Uso de `ngSwitch` com Objetos
  Neste exercício, você deve criar um componente que utiliza a diretiva `ngSwitch` para exibir informações sobre um país com base em um objeto `paisSelecionado`.

### **Saída Esperada:**
```
País: Brasil, Capital: Brasília
```

### **Exemplo de Entrada:**
```html
<div [ngSwitch]="paisSelecionado">
  <div *ngSwitchCase="brasil">País: Brasil, Capital: Brasília</div>
  <div *ngSwitchCase="eua">País: EUA, Capital: Washington D.C.</div>
  <div *ngSwitchDefault>País não reconhecido.</div>
</div>
```


### **Solução:**

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component switch-objetos
   ```

2. No arquivo `switch-objetos.component.ts`, defina uma propriedade `paisSelecionado` como um objeto que representa um país:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-switch-objetos',
     template: `
       <div [ngSwitch]="paisSelecionado">
         <div *ngSwitchCase="brasil">País: Brasil, Capital: Brasília</div>
         <div *ngSwitchCase="eua">País: EUA, Capital: Washington D.C.</div>
         <div *ngSwitchDefault>País não reconhecido.</div>
       </div>
     `
   })
   export class SwitchObjetosComponent {
     brasil = { nome: 'Brasil', capital: 'Brasília' };
     eua = { nome: 'EUA', capital: 'Washington D.C.' };
     paisSelecionado = this.brasil;
   }
   ```


<br/>
<br/>

## Exercício 34: Uso Básico do `ngClass`
Neste exercício, você deve criar um componente que utiliza a diretiva `ngClass` para aplicar classes CSS condicionalmente a um elemento de parágrafo.

**Saída Esperada:**
```
Texto em Vermelho e Negrito
```

**Exemplo de Entrada:**
```html
<p [ngClass]="{'vermelho': true, 'negrito': true}">Texto em Vermelho e Negrito</p>
```


### Solução:

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component class-basico
   ```

2. No arquivo `class-basico.component.ts`, defina as classes CSS que você deseja aplicar como propriedades no componente:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-class-basico',
     template: `<p [ngClass]="{'vermelho': true, 'negrito': true}">Texto em Vermelho e Negrito</p>`,
     styles: [`
       .vermelho {
         color: red;
       }
       .negrito {
         font-weight: bold;
       }
     `]
   })
   export class ClassBasicoComponent {}
   ```

<br/>
<br/>

## Exercício 35: Uso de `ngClass` com Expressão
Neste exercício, você deve criar um componente que utiliza a diretiva `ngClass` com uma expressão para aplicar uma classe CSS condicionalmente com base em uma variável `italicoAtivo`.

**Saída Esperada:**
```
Texto em Itálico
```

**Exemplo de Entrada:**
```html
<p [ngClass]="{'italico': italicoAtivo}">Texto em Itálico</p>
```


### Solução:

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component class-expressao
   ```

2. No arquivo `class-expressao.component.ts`, defina uma propriedade `italicoAtivo` no componente e altere sua classe com base nessa propriedade:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-class-expressao',
     template: `<p [ngClass]="{'italico': italicoAtivo}">Texto em Itálico</p>`,
     styles: [`
       .italico {
         font-style: italic;
       }
     `]
   })
   export class ClassExpressaoComponent {
     italicoAtivo = true;
   }
   ```

<br/>
<br/>

## Exercício 36: Uso Básico do `ngStyle`
Neste exercício, você deve criar um componente que utiliza a diretiva `ngStyle` para aplicar estilos condicionalmente a um elemento de parágrafo.

**Saída Esperada:**
```
Texto em Vermelho e Tamanho 24px
```

**Exemplo de Entrada:**
```html
<p [ngStyle]="{'color': 'red', 'font-size.px': 24}">Texto em Vermelho e Tamanho 24px</p>
```


### Solução:

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component style-basico
   ```

2. No arquivo `style-basico.component.ts`, defina os estilos CSS que você deseja aplicar como propriedades no componente:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-style-basico',
     template: `<p [ngStyle]="{'color': 'red', 'font-size.px': 24}">Texto em Vermelho e Tamanho 24px</p>`
   })
   export class StyleBasicoComponent {}
   ```

<br/>
<br/>

## Exercício 37: Uso de `ngStyle` com Expressão
Neste exercício, você deve criar um componente que utiliza a diretiva `ngStyle` com uma expressão para aplicar um estilo condicionalmente com base em uma variável `tamanhoFonte`.

**Saída Esperada:**
```
Texto em Tamanho 16px
```

**Exemplo de Entrada:**
```html
<p [ngStyle]="{'font-size.px': tamanhoFonte}">Texto em Tamanho 16px</p>
```


### Solução:

1. Crie um novo componente usando o Angular CLI com o comando:
   ```
   ng generate component style-expressao
   ```

2. No arquivo `style-expressao.component.ts`, defina uma propriedade `tamanhoFonte` no componente e altere o estilo com base nessa propriedade:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-style-expressao',
     template: `<p [ngStyle]="{'font-size.px': tamanhoFonte}">Texto em Tamanho 16px</p>`
   })
   export class StyleExpressaoComponent {
     tamanhoFonte = 16;
   }
   ```


<br/>
<br/>

## Exercício 38: Uso Básico do `ngModel`
Neste exercício, você deve criar um componente que utiliza a diretiva `ngModel` para vincular um valor de input a uma propriedade e exibir o valor em um parágrafo.

**Saída Esperada:**
```
Valor do Input: Hello, World!
```

**Exemplo de Entrada:**
```html
<input [(ngModel)]="mensagem" (ngModelChange)="onInputChange()">
<p>Valor do Input: {{ mensagem }}</p>
```


### Solução:

1. Importe `FormsModule` em seu módulo Angular (geralmente `app.module.ts`) para habilitar o uso de `ngModel`:
   ```typescript
   import { FormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       // ...
       FormsModule,
     ],
     // ...
   })
   ```

2. No arquivo `seu-componente.component.ts`, defina uma propriedade `mensagem` e um método `onInputChange()`:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <input [(ngModel)]="mensagem" (ngModelChange)="onInputChange()">
       <p>Valor do Input: {{ mensagem }}</p>
     `
   })
   export class SeuComponenteComponent {
     mensagem = 'Hello, World!';

     onInputChange() {
       // Lógica a ser executada quando o valor do input muda
     }
   }
   ```

<br/>
<br/>

## Exercício 39: Uso de `ngModel` com Formulário
  Neste exercício, você deve criar um componente que utiliza a diretiva `ngModel` em um formulário para vincular o valor de um input a uma propriedade e exibir o valor em um parágrafo.

**Saída Esperada:**
```
Valor do Nome: John Doe
```

**Exemplo de Entrada:**
```html
<form #form="ngForm">
  <input name="nome" [(ngModel)]="nome">
</form>
<p>Valor do Nome: {{ nome }}</p>
```


### Solução:

1. Importe `FormsModule` em seu módulo Angular (geralmente `app.module.ts`) para habilitar o uso de `ngModel`:
   ```typescript
   import { FormsModule } from '@angular/forms';

   @NgModule({
     imports: [
       // ...
       FormsModule,
     ],
     // ...
   })
   ```

2. No arquivo `seu-componente.component.ts`, defina uma propriedade `nome`:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <form #form="ngForm">
         <input name="nome" [(ngModel)]="nome">
       </form>
       <p>Valor do Nome: {{ nome }}</p>
     `
   })
   export class SeuComponenteComponent {
     nome = 'John Doe';
   }
   ```

<br/>
<br/>

## Exercício 40: Uso Básico de `ngTemplate`
Neste exercício, você deve criar um componente que utiliza a diretiva `ngTemplateOutlet` para renderizar um template personalizado.

**Saída Esperada:**
```
Texto Personalizado
```

**Exemplo de Entrada:**
```html
<ng-container *ngTemplateOutlet="templateRef"></ng-container>
<ng-template #templateRef>Texto Personalizado</ng-template>
```


### Solução:

1. No arquivo `seu-componente.component.ts`, defina um template com uma referência de template local (`#templateRef`):
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <ng-container *ngTemplateOutlet="templateRef"></ng-container>
       <ng-template #templateRef>Texto Personalizado</ng-template>
     `
   })
   export class SeuComponenteComponent {}
   ```

<br/>
<br/>

## Exercício 41: Uso de `ngTemplate` com Contexto
Neste exercício, você deve criar um componente que utiliza a diretiva `ngTemplateOutlet` para renderizar um template personalizado com um contexto específico.

**Saída Esperada:**
```
Nome: John Doe
```

**Exemplo de Entrada:**
```html
<ng-container *ngTemplateOutlet="templateRef; context: { nome: 'John Doe' }"></ng-container>
<ng-template #templateRef let-nome>Nome: {{ nome }}</ng-template>
```


### Solução:

1. No arquivo `seu-componente.component.ts`, defina um template com uma referência de template local (`#templateRef`) e um contexto com uma variável `nome`:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <ng-container *ngTemplateOutlet="templateRef; context: { nome: 'John Doe' }"></ng-container>
       <ng-template #templateRef let-nome>Nome: {{ nome }}</ng-template>
     `
   })
   export class SeuComponenteComponent {}
   ```

<br/>
<br/>

## Exercício 42: Uso Básico de `ngContent`
Neste exercício, você deve criar um componente que utiliza a diretiva `ngContent` para inserir conteúdo em seu template.

**Saída Esperada:**
```
Conteúdo Inserido
```

**Exemplo de Entrada:**
```html
<app-seu-componente>Conteúdo Inserido</app-seu-componente>
```


### Solução:

1. No arquivo `seu-componente.component.ts`, defina a diretiva `ng-content` em seu template:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <p><ng-content></ng-content></p>
     `
   })
   export class SeuComponenteComponent {}
   ```

2. Use o componente `seu-componente` em seu template principal e insira o conteúdo desejado entre as tags `<app-seu-componente>`.

<br/>
<br/>

## Exercício 43: Uso de `ngContent` com Projeção
  Neste exercício, você deve criar um componente que utiliza a diretiva `ngContent` para projetar e exibir conteúdo inserido.

**Saída Esperada:**
```
Conteúdo Projetado
```

**Exemplo de Entrada:**
```html
<app-seu-componente>
  <p>Conteúdo Projetado</p>
</app-seu-componente>
```


### Solução:

1. No arquivo `seu-componente.component.ts`, defina a diretiva `ng-content` em seu template para projetar o conteúdo:
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-seu-componente',
     template: `
       <p><ng-content></ng-content></p>
     `
   })
   export class SeuComponenteComponent {}
   ```

2. Use o componente `seu-componente` em seu template principal e insira o conteúdo desejado entre as tags `<app-seu-componente>`. O conteúdo inserido será projetado no local onde a diretiva `ng-content` foi definida no template do componente.
