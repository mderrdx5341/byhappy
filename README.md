```typescript
abstarct Cart {
	conditionToVisible();
	requireCartForUse();
	addCartsToHand();
}

```
```typescript
abstract CartInHand {
	cartAction();
	cartItem();
	cartPlace();
}
```
```typescript
enum CartType {
    Item = 'item',
    Player = 'player',
    Action = 'action',
    Place = 'place',
    Improve = 'improve'
}
```