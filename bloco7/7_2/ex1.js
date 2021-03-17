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

//================================

// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
//[ 'name', 'phoneNumber', 'address', 'order', 'payment' ]

// exer 1

const customerInfo = (order) => {
  const person = order.order.delivery.deliveryPerson;
  const costumer = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;

  console.log(
    `Olá ${person}, entrega para: ${costumer}, Telefone: ${phone}, R. ${street}, N: ${number}, AP: ${apartment}`
  );
};

customerInfo(order);

//loopando

const customerInfo = (order) => {
  const arrObj = Object.keys(order);
  let person;
  let costumer;
  let phone;
  let street;
  let number;
  let apartment;

  for (let key of arrObj) {
    switch (key) {
      case 'name':
        costumer = order[key];
        break;
      case 'phoneNumber':
        phone = order[key];
        break;
      case 'address':
        street = order[key]['street'];
        number = order[key]['number'];
        apartment = order[key]['apartment'];
        break;
      case 'order':
        person = order[key]['delivery']['deliveryPerson'];
        break;
    }
  }

  console.log(
    `Olá ${person}, entrega para: ${costumer}, Telefone: ${phone}, R. ${street}, N: ${number}, AP: ${apartment}`
  );
};

customerInfo(order);
