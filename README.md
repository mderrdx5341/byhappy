```
game
	step
		playCart(cart: Cart)
			cart.action(player)

	carts<Cart>[];
	cart
	{
		title()
		description()
		effects[]
		action()
		type : enum {
			item,
			player,
			action
		}
	}
	action(cart)
	{
		cart.action()
	}
	
	
	effect{
		title()
		description()
	}
	
	desk(actions[])
	{
	}
```