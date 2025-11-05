# Convention de nommage des propriétés privées avec getter/setter

## Objectif
Quand une classe expose une propriété via un `getter` / `setter`, il faut différencier :
- la **valeur publique accessible** (exposée via `budget`)
- la **valeur interne stockée** dans la classe (`_budget`)

Sans cette séparation, le setter se réassignerait lui-même et provoquerait une récursion infinie.

## Convention
- `_budget` : valeur privée interne
- `budget` : propriété publique avec accès contrôlé

## Exemple simplifié
```ts
private _budget: number = 0

get budget(): number {
  return this._budget
}

set budget(value: number) {
  this._budget = value > BUDGET_MAX ? BUDGET_MAX : value
}