A mensagem de "deprecated" que você estava vendo, provavelmente não se referia ao método `.email()` em si, mas sim à **ordem** em que as validações estavam encadeadas.

Em versões mais recentes do Zod, a recomendação é seguir uma ordem lógica de validações. No seu caso, a validação original era:

```typescript
email: z
    .string()
    .min(1, "E-mail é obrigatório") 
    .email("E-mail inválido"),
```

Aqui está o porquê dessa ordem poder ser considerada obsoleta ou sub-ótima:

1.  **Lógica de Validação:** A biblioteca primeiro verificava se a string tinha um tamanho mínimo de 1 (`.min(1)`) e **depois** se era um email válido (`.email()`). Faz mais sentido verificar primeiro se a string tem o **formato** de um email, para depois aplicar outras regras, como a de não ser vazia.

2.  **Eficiência e Mensagens de Erro:** Ao inverter a ordem, como eu fiz na correção, o Zod primeiro checa o formato. Se o usuário digitar algo como "texto-qualquer", ele receberá a mensagem "E-mail inválido" imediatamente. Na ordem anterior, dependendo da implementação interna da versão do Zod que você usa, a validação de `.min(1)` passaria e só depois a de `.email()` falharia, o que pode ser menos eficiente.

A forma corrigida e recomendada é:

```typescript
email: z
    .string()
    .email("E-mail inválido") 
    .min(1, "E-mail é obrigatório"),
```

Nesta versão:
1.  `z.string()`: Garante que o tipo é `string`.
2.  `.email("E-mail inválido")`: Valida se a string tem um formato de e-mail reconhecido.
3.  `.min(1, "E-mail é obrigatório")`: Garante que a string não está vazia.

Resumindo: a mensagem de "deprecated" era um aviso sutil da biblioteca para te incentivar a usar uma ordem de validação mais lógica e eficiente, garantindo que as regras mais específicas (como o formato do email) sejam testadas antes das mais genéricas (como o tamanho da string).
