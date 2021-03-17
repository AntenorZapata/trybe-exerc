const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  const person = (order.order.delivery.deliveryPerson = 'Luiz Silva');
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const pay = (order.payment.total = '50,00');

  console.log(
    `OLá, ${person}, o total do seu pedido de ${pizza} e ${drink} é de R$ ${pay}`
  );
};

orderModifier(order);
